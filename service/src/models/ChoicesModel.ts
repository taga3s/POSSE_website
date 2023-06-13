import { pool } from '../configs/dbconnect.js'

export class ChoicesModel {
  public async getAll() {
    const sql = 'SELECT * FROM choices'
    const [rows] = await pool.execute(sql)
    if (Array.isArray(rows) && !rows.length) {
      throw Error('Internal Server Error 500')
    }
    return rows
  }

  public async getById(id: string) {
    const sql = `SELECT * FROM choices WHERE quiz_id = ${id}`
    const [rows] = await pool.execute(sql)
    if (Array.isArray(rows) && !rows.length) {
      throw Error('Internal Server Error 500!!')
    }
    return rows
  }

  public async create() { }
  public async update() { }
  public async deleteById() { }
}
