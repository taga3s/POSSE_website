import { connection } from '../configs/dbconnect.js'
export class QuizModel {
  async getAll() {
    try {
      const sql = 'SELECT * FROM quizzes'
      const [rows] = await connection.execute(sql)
      return rows
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      throw new Error('failed getting data')
    }
  }
  async getById(id) {
    try {
      const sql = 'SELECT * FROM quizzes WHERE `id` = ?'
      const [rows] = await connection.execute(sql, [id])
      return rows
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      throw new Error('failed getting data')
    }
  }
  async create(quiz) {
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
      const rsh = ResultSetHeader
      await connection.commit()
      return rsh.insertId
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      throw new Error('failed posting data')
    }
  }
  async update(id, quiz) {
    const { quiz_text, supplement_text, supplement_url } = quiz
    try {
      await connection.beginTransaction()
      const sql =
        'UPDATE quizzes SET quiz_text = ?, supplement_text = ?, supplement_url = ? WHERE id = ?'
      const [ResultSetHeader] = await connection.execute(sql, [
        quiz_text,
        supplement_text,
        supplement_url,
        id,
      ])
      const rsh = ResultSetHeader
      if (rsh.affectedRows == 0) throw new Error('there is no data')
      await connection.commit()
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      throw new Error('failed updating data')
    }
  }
  async deleteById(id) {
    try {
      await connection.beginTransaction()
      const sql = 'DELETE FROM quizzes WHERE `id` = ?'
      const [ResultSetHeader] = await connection.execute(sql, [id])
      const rsh = ResultSetHeader
      if (rsh.affectedRows == 0) throw new Error('there is no data')
      await connection.commit()
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      throw new Error('failed deleting data')
    }
  }
}
