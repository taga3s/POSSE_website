import { ResultSetHeader } from 'mysql2'
import { connection } from '../configs/dbconnect.js'
import { IQuizDTO } from '../interfaces/IQuiz.js'

export class QuizModel {
  public async getAll() {
    try {
      const sql = 'SELECT * FROM quizzes'
      const [rows] = await connection.execute(sql)
      return rows
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      throw new Error('failed getting data')
    }
  }

  public async getById(id: string) {
    try {
      const sql = 'SELECT * FROM quizzes WHERE `id` = ?'
      const [rows] = await connection.execute(sql, [id])
      return rows
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      throw new Error('failed getting data')
    }
  }

  public async create(quiz: IQuizDTO) {
    const { quiz_text, img, supplement_text, supplement_url } = quiz
    try {
      await connection.beginTransaction()

      const sql =
        'INSERT INTO quizzes(quiz_text, img, supplement_text, supplement_url) VALUES(?, ?, ?, ?)'
      const [ResultSetHeader] = await connection.execute(sql, [
        quiz_text,
        img,
        supplement_text,
        supplement_url,
      ])
      const rsh = ResultSetHeader as ResultSetHeader

      await connection.commit()

      return rsh.insertId
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      throw new Error('failed posting data')
    }
  }

  public async update(id: string, quiz: IQuizDTO) {
    const { quiz_text, img, supplement_text, supplement_url } = quiz
    try {
      await connection.beginTransaction()

      const sql =
        'UPDATE quizzes SET quiz_text = ?, img = ?, supplement_text = ?, supplement_url = ? WHERE id = ?'
      const [ResultSetHeader] = await connection.execute(sql, [
        quiz_text,
        img,
        supplement_text,
        supplement_url,
        id,
      ])
      const rsh = ResultSetHeader as ResultSetHeader
      if (rsh.affectedRows == 0) throw new Error('there is no data')

      await connection.commit()
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      throw new Error('failed updating data')
    }
  }

  public async deleteById(id: string) {
    try {
      await connection.beginTransaction()

      const sql = 'DELETE FROM quizzes WHERE `id` = ?'
      const [ResultSetHeader] = await connection.execute(sql, [id])

      const rsh = ResultSetHeader as ResultSetHeader
      if (rsh.affectedRows == 0) throw new Error('there is no data')

      await connection.commit()
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      throw new Error('failed deleting data')
    }
  }
}
