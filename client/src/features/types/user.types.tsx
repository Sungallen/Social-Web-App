export interface IUserSlice {
  username: string
  account: string
  created_time: Date
  email: string
  gender: number
  loginStatus: string
  token: string
}

export interface ILoginActionPayload {
  account: string
  password: string
}

export interface IUser {
  id: number
  username: string
  account: string
  created_time: Date
  birth: Date
  email: string
  gender: number
}
export interface IUserLogin {
  user: IUser[]
  token: string
}

export interface IRegisterPayload {
  email: string
  username: string
  account: string
  password: string
  created_time: Date
  gender: number
}

export interface IFriendSug {
  id: number
  username: string
  image: string
}
