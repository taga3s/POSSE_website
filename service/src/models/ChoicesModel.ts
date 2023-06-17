import { ResultSetHeader } from 'mysql2'
import { connection } from '../configs/dbconnect.js'
import { IChoicesDTO } from '../interfaces/IChoices.js'
import { customLogger } from '../utils/logger.js'

export class ChoicesModel {
  public async getAll() {
    try {
      const sql = 'SELECT * FROM choices'
      const [rows] = await connection.execute(sql)
      return rows
    } catch (e) {
      customLogger.error('🔥 error: %o', e)
    }
  }

  public async getById(id: string) {
    try {
      const sql = `SELECT * FROM choices WHERE quiz_id = ?`
      const [rows] = await connection.execute(sql, [id])
      return rows
    } catch (e) {
      customLogger.error('🔥 error: %o', e)
    }
  }

  public async create(quiz_id: number, choices: IChoicesDTO) {
    const { choices_data } = choices
    try {
      await connection.beginTransaction()

      choices_data.forEach((c) => {
        const sql = `INSERT INTO choices(quiz_id, name, isCorrect) VALUES(?, ?, ?)`
        connection.execute(sql, [quiz_id, c.name, c.isCorrect])
      })

      await connection.commit()

      return true
    } catch (e) {
      await connection.rollback()
      customLogger.error('🔥 error: %o', e)
    }
  }

  public async update(quiz_id: string, choices: IChoicesDTO) {
    const { choices_data } = choices
    try {
      await connection.beginTransaction()

      choices_data.forEach((c, i) => {
        const id = 3 * (parseInt(quiz_id) - 1) + (i + 1)
        const sql = 'UPDATE choices SET `name` = ?, `isCorrect` = ? WHERE `id` = ?'
        connection.execute(sql, [c.name, c.isCorrect, id])
      })

      await connection.commit()

      return true
    } catch (e) {
      await connection.rollback()
      customLogger.error('🔥 error: %o', e)
    }
  }

  public async deleteById(id: string) {
    try {
      await connection.beginTransaction()

      const sql = 'DELETE FROM choices WHERE `quiz_id` = ?'
      const [ResultSetHeader] = await connection.execute(sql, [id])

      const rsh = ResultSetHeader as ResultSetHeader
      if (rsh.affectedRows == 0) throw new Error(`There is no id:${id} choices content data`)

      await connection.commit()

      return true
    } catch (e) {
      await connection.rollback()
      customLogger.error('🔥 error: %o', e)
    }
  }
}
