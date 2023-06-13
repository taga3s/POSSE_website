import { pool } from '../configs/dbconnect.js';
export class QuizModel {
    async getAll() {
        const sql = 'SELECT * FROM quizzes';
        const [rows] = await pool.execute(sql);
        if (Array.isArray(rows) && !rows.length) {
            throw Error('Internal Server Error 500');
        }
        return rows;
    }
    async getById(id) {
        const sql = `SELECT * FROM quizzes WHERE id = ${id}`;
        const [rows] = await pool.execute(sql);
        if (Array.isArray(rows) && !rows.length) {
            throw Error('Internal Server Error 500');
        }
        return rows;
    }
    async create() { }
    async update() { }
    async deleteById() { }
}
