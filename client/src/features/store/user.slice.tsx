import { createAction, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserSlice } from 'features/types/user.types'

const initialState: IUserSlice = {
  username: '',
  email: '',
  account: '',
  created_time: new Date(),
  birth: new Date(),
  gender: 0,
  loginStatus: '',
}

export const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<IUser>) {
      state.username = action.payload.username
      state.email = action.payload.email
      state.account = action.payload.account
      state.created_time = new Date(action.payload.created_time)
      state.birth = new Date(action.payload.birth)
      state.gender = action.payload.gender
      state.loginStatus = 'Login'
    },
  },
})

export const userActions = {
  loginSaga: createAction(
    'user/loginSaga',
    (account: string | undefined, password: string | undefined) => ({
      payload: { account, password },
    }),
  ),
}

export default userSlice.reducer
