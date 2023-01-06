import { createAction, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { IUserLogin, IUserSlice } from 'features/types/user.types'

const initialState: IUserSlice = {
  username: '',
  email: '',
  account: '',
  created_time: new Date(),
  gender: 0,
  loginStatus: '',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU4LCJ1c2VybmFtZSI6IkFsbGVuIiwiZ2VuZGVyIjoxLCJjcmVhdGVkX3RpbWUiOiIyMDIyLTEyLTExVDE2OjMxOjIxLjAwMFoiLCJhY2NvdW50IjoiQWxsZW4iLCJwYXNzd29yZCI6IjEwMTciLCJlbWFpbCI6ImFsbGVuQGdtYWlsLmNvbSIsImltYWdlIjoiL3NlcnZlci9tZWRpYS91c2Vycy8yNTgvMjU4LmpwZyIsImlhdCI6MTY3Mjk5NDc5NCwiZXhwIjoxNjcyOTk4Mzk0fQ.tkm2iExIu8Dr4u05MLVDo9xF1jfRKq5SHMxiAQeI7KI',
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
