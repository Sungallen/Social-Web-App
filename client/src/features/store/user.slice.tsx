import { createAction, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { IUserLogin, IUserSlice } from 'features/types/user.types'

const initialState: IUserSlice = {
  username: '',
  email: '',
  account: '',
  created_time: new Date(),
  gender: 0,
  loginStatus: '',
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<IUserLogin>) {
      state.username = action.payload.user[0].username
      state.email = action.payload.user[0].email
      state.account = action.payload.user[0].account
      state.created_time = new Date(action.payload.user[0].created_time)
      state.gender = action.payload.user[0].gender
      state.loginStatus = 'Login'
      state.token = action.payload.token
    },
    setTestingToken(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
  },
})

export const userActions = {
  loginSaga: createAction(
    `${userSlice.name}/loginSaga`,
    (account: string | undefined, password: string | undefined) => ({
      payload: { account, password },
    }),
  ),
  submitPostSaga: createAction(
    `${userSlice}/postSaga`,
    (content?: string | undefined, image?: File | null, token?: string) => ({ payload: { token } }),
  ),
  registerSaga: createAction(
    `${userSlice.name}/registerSaga`,
    (
      email: string | undefined,
      username: string | undefined,
      account: string | undefined,
      password: string | undefined,
      created_time: Date,
      gender: number,
    ) => ({ payload: { email, username, account, password, created_time, gender } }),
  ),
  sharePostSaga: createAction(
    `${userSlice}/sharePostSaga`,
    (image: File | null, token: string) => ({ payload: { image, token } }),
  ),
}

export default userSlice.reducer
