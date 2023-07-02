/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResultSetHeader } from 'mysql2'
import { connection } from '../configs/dbconnect.js'
import { IUserSignUpDTO, IUserSignInDTO, IUserInviteDTO } from '../interfaces/IUser.js'
import { customLogger } from '../utils/logger.js'
import crypto from 'crypto'
import { sendEmail } from '../utils/sendEmail.js'

type resUserData = {
  id: number
  name: string
  email: string
  password: string
}

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

  public async invite(userInviteDTO: IUserInviteDTO) {
    const { email } = userInviteDTO

    const sql_1 = 'SELECT * FROM users WHERE `email` = ?'
    const [rows] = (await connection.execute(sql_1, [email])) as unknown as any

    if (rows.length) {
      throw new Error('招待済みのメールアドレスです。')
    }

    try {
      await connection.beginTransaction()

      const sql_2 = 'INSERT INTO users(email) VALUES(?)'
      const [ResultSetHeader] = await connection.execute(sql_2, [email])

      const rsh = ResultSetHeader as ResultSetHeader

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

  // public async create(userDTO: IUserSignUpDTO) {
  //   const { name, email, password, password_confirm, token } = userDTO
  //   if (password !== password_confirm) {
  //     throw new Error('パスワードが一致しません。')
  //   }

  //   const sql_1 = 'SELECT * FROM users WHERE `email` = ?'
  //   const [rows] = (await connection.execute(sql_1, [email])) as unknown as any
  //   const user = rows[0]

  //   const sql_2 = 'SELECT * FROM user_invitations WHERE `token` = ? AND `user_id` = ?'
  //   const res = await connection.execute(sql_2, [token, user.id])

  //   try {
  //     await connection.beginTransaction()
  //     const sql_3 = 'UPDATE users SET `name` = ?, `password` = ? WHERE `id` = ?'
  //     const res_3 = ''
  //     await connection.commit()
  //   } catch (e) { }
  // }
}
