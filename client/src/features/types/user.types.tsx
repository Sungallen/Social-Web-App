export interface IUserSlice {
  username: string
  account: string
  created_time: Date
  birth: Date
  email: string
  gender: number
  loginStatus: string
}

export interface ILoginActionPayload {
  account: string
  password: string
}

export interface IUser {
  username: string
  account: string
  created_time: Date
  birth: Date
  email: string
  gender: number
}
