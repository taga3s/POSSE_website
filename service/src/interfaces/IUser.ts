export interface IUserInviteDTO {
  email: string
}

export interface IUserSignInDTO {
  email: string
  password: string
}

export interface IUserSignUpDTO {
  name: string
  email: string
  password: string
  password_confirm: string
  token: string
}
