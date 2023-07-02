import { IUserSignUpDTO, IUserSignInDTO, IUserInviteDTO } from '../interfaces/IUser.js'
import UserModel from '../models/UserModel.js'

export default class UserService {
  private userModel

  constructor() {
    this.userModel = new UserModel()
  }

  public async invite(userInviteDTO: IUserInviteDTO) {
    const isSentEmail = await this.userModel.invite(userInviteDTO)

    if (isSentEmail) {
      return { status: 'success', message: 'Successfully sent email' }
    } else {
      throw new Error('Failed sending email...')
    }
  }

  // public async signIn(userSignInDTO: IUserSignInDTO) {
  //   const user = await this.userModel.findByEmail(userSignInDTO)

  //   if (user) {
  //     return { status: 'success', message: 'Successfully signin!', user: user }
  //   } else {
  //     throw new Error('Failed sign in...')
  //   }
  // }

  // public async signUp(userDTO: IUserSignUpDTO) {
  //   const isUserCreated = this.userModel.create(userDTO)
  // }
}
