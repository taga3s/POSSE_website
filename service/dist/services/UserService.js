import UserModel from '../models/UserModel.js'
export default class UserService {
  userModel
  constructor() {
    this.userModel = new UserModel()
  }
  async invite(userInviteDTO) {
    const isSentEmail = await this.userModel.invite(userInviteDTO)
    if (isSentEmail) {
      return { status: 'success', message: 'Successfully sent email' }
    } else {
      throw new Error('Failed sending email...')
    }
  }
}
