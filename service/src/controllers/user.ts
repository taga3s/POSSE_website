import { NextFunction, Request, Response, Router } from 'express'
import { customLogger } from '../utils/logger.js'
import UserService from '../services/UserService.js'
import { inviteValidator } from './middleware/validations/user.js'

const route = Router()

route.post('/invite', inviteValidator, async (req: Request, res: Response, next: NextFunction) => {
  const userService = new UserService()

  try {
    const UserInviteDTO = req.body
    const { status, message } = await userService.invite(UserInviteDTO)
    customLogger.debug(`🔧 debug: [${status}] ${message}`)
    return res.status(200).json({ status, message })
  } catch (e) {
    customLogger.error(`🔥 error: ${e}`)
    return next(e)
  }
})

// route.post('/signin', async (req: Request, res: Response, next: NextFunction) => {
//   const userService = new UserService()

//   try {
//     const UserSignInDTO = req.body
//     const { status, message, user } = await userService.signIn(UserSignInDTO)
//     req.session.id = String(user.id)
//     req.session.name = user.name
//     customLogger.debug(`🔧 debug: [${status}] ${message}`)
//     return res.status(200).json({ status, message })
//   } catch (e) {
//     customLogger.error(`🔥 error: ${e}`)
//     return next(e)
//   }
// })

// route.post('/signup', async (req: Request, res: Response, next: NextFunction) => {
//   const userService = new UserService()

//   try {
//     const UserSignUpDTO = req.body
//     // const {} = await userService.signUp(UserSignUpDTO)
//   } catch (e) {
//     customLogger.error(`🔥 error: ${e}`)
//     return next(e)
//   }
// })

export default route
