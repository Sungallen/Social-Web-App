import { createAction, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { ViewState } from 'features/types/group.types'

const initialState = { viewState: ViewState.SHOW_EVENTS }

export const groupSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setViewState(state, action: PayloadAction<ViewState>) {
      state.viewState = action.payload
    },
  },
})

// export const userActions = {
//   loginSaga: createAction(
//     `${userSlice.name}/loginSaga`,
//     (account: string | undefined, password: string | undefined) => ({
//       payload: { account, password },
//     }),
//   ),
//   submitPostSaga: createAction(
//     `${userSlice}/postSaga`,
//     (content: string | undefined, image: File | null) => ({ payload: { content, image } }),
//   ),
//   registerSaga: createAction(
//     `${userSlice.name}/registerSaga`,
//     (
//       email: string | undefined,
//       username: string | undefined,
//       account: string | undefined,
//       password: string | undefined,
//       created_time: Date,
//       gender: number,
//     ) => ({ payload: { email, username, account, password, created_time, gender } }),
//   ),
// }

export default groupSlice.reducer
