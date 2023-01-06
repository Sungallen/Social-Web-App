import { createAction, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { IUserLogin, IUserSlice } from 'features/types/user.types'

const initialState: IUserSlice = {
  id: 0,
  username: '',
  email: '',
  account: '',
  created_time: new Date(),
  gender: 0,
  loginStatus: '',
  token: '',
  image: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<IUserLogin>) {
      state.id = action.payload.user[0].id
      state.username = action.payload.user[0].username
      state.email = action.payload.user[0].email
      state.account = action.payload.user[0].account
      state.created_time = new Date(action.payload.user[0].created_time)
      state.gender = action.payload.user[0].gender
      state.loginStatus = 'Login'
      state.token = action.payload.token
      state.image = action.payload.user[0].image
    },
    setTestingToken(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
    modifyUserImage(state, action: PayloadAction<string | any | null>) {
      state.image = `/server/media/users/${state.id}/${action.payload}`
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
  uploadProfileImageSaga: createAction(
    `${userSlice}/uploadProfileImageSaga`,
    (image: File | null, token: string) => ({ payload: { image, token } }),
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
