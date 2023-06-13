import { pool } from '../configs/dbconnect.js';
export class ChoicesModel {
    async getAll() {
        const sql = 'SELECT * FROM choices';
        const [rows] = await pool.execute(sql);
        if (Array.isArray(rows) && !rows.length) {
            throw Error('Internal Server Error 500');
        }
        return rows;
    }
    async getById(id) {
        const sql = `SELECT * FROM choices WHERE quiz_id = ${id}`;
        const [rows] = await pool.execute(sql);
        if (Array.isArray(rows) && !rows.length) {
            throw Error('Internal Server Error 500!!');
        }
        return rows;
    }
    async create() { }
    async update() { }
    async deleteById() { }
}
