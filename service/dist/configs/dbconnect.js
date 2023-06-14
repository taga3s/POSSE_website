// Promise APIをインポートする
import mysql from 'mysql2/promise'
const connectionOptions = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'posse',
}
export const connection = await mysql.createConnection(connectionOptions)
