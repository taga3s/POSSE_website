import { pool } from '../configs/dbconnect.js'

export class QuizModel {
  public async getAll() {
    const sql = 'SELECT * FROM quizzes'
    const [rows] = await pool.execute(sql)
    if (Array.isArray(rows) && !rows.length) {
      throw Error('Internal Server Error 500')
    }
    return rows
  }

  public async getById(id: string) {
    const sql = `SELECT * FROM quizzes WHERE id = ${id}`
    const [rows] = await pool.execute(sql)
    if (Array.isArray(rows) && !rows.length) {
      throw Error('Internal Server Error 500')
    }
    return rows
  }

  public async create() { }
  public async update() { }
  public async deleteById() { }
}
