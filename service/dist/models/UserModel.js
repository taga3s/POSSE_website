import { connection } from '../configs/dbconnect.js'
import { customLogger } from '../utils/logger.js'
import crypto from 'crypto'
import { sendEmail } from '../utils/sendEmail.js'
export default class UserModel {
  // public async findByEmail(userSignInDTO: IUserSignInDTO) {
  //   const { email, password } = userSignInDTO
  //   try {
  //     const sql = 'SELECT * from users WHERE `email` = ?'
  //     const [rows] = (await connection.execute(sql, [email])) as unknown as resUserData[][]
  //     //TODO: hash
  //     if (rows[0].password === password) {
  //       return rows[0]
  //     }
  //   } catch (e) {
  //     customLogger.error(`🔥 error: ${e}`)
  //   }
  // }
  async invite(userInviteDTO) {
    const { email } = userInviteDTO
    const sql_1 = 'SELECT * FROM users WHERE `email` = ?'
    const [rows] = await connection.execute(sql_1, [email])
    if (rows.length) {
      throw new Error('招待済みのメールアドレスです。')
    }
    try {
      await connection.beginTransaction()
      const sql_2 = 'INSERT INTO users(email) VALUES(?)'
      const [ResultSetHeader] = await connection.execute(sql_2, [email])
      const rsh = ResultSetHeader
      const user_id = rsh.insertId
      const token = crypto.randomBytes(16).toString('hex')
      const sql_3 = 'INSERT INTO user_invitations(user_id, token) VALUES(?, ?)'
      await connection.execute(sql_3, [user_id, token])
      await connection.commit()
      sendEmail(email, token)
      return true
    } catch (e) {
      customLogger.error(`🔥 error: ${e}`)
    }
  }
}
