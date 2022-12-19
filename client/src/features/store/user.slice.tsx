import { createAction, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserSlice } from 'features/types/user.types'

const initialState: IUserSlice = {
  username: '',
  email: '',
  account: '',
  created_time: new Date(),
  gender: 0,
  loginStatus: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<IUser>) {
      state.username = action.payload.username
      state.email = action.payload.email
      state.account = action.payload.account
      state.created_time = new Date(action.payload.created_time)
      state.gender = action.payload.gender
      state.loginStatus = 'Login'
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
    (content: string | undefined, image: File | null) => ({ payload: { content, image } }),
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
}

export default userSlice.reducer
