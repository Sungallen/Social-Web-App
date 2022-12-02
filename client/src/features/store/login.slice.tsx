import { createAction, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  id: 123,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setId(state, action: any) {
      state.id = action.payload
    },
  },
})

export default loginSlice.reducer
