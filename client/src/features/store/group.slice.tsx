import { createAction, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { IGroup, IGroupCardProps, ViewState } from 'features/types/group.types'

export interface IGroupState {
  viewState: ViewState
  groups: IGroup[]
}

const initialState: IGroupState = { viewState: ViewState.SHOW_EVENTS, groups: [] }

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    fetchAllSucceeded(state, action: PayloadAction<IGroup[]>) {
      state.groups = action.payload
    },
    setViewState(state, action: PayloadAction<ViewState>) {
      state.viewState = action.payload
    },
    setGroupList(state, action: PayloadAction<IGroup[]>) {
      state.groups = action.payload
    },
  },
})

export const groupActions = {
  // loginSaga: createAction(
  //   `${groupSlice.name}/loginSaga`,
  //   (account: string | undefined, password: string | undefined) => ({
  //     payload: { account, password },
  //   }),
  // ),
  createNewGroupSaga: createAction(`${groupSlice.name}/create`, (group: any) => ({
    payload: { id: nanoid(), title: group.title, body: group.body },
  })),
  fetchAllGroupSaga: createAction(`${groupSlice.name}/fetchAll`, (token: string) => ({
    payload: { token },
  })),
  fetchAllSucceededSaga: groupSlice.actions.fetchAllSucceeded,
  // update: createAction<Post>(`${groupSlice.name}/update`),
  // delete: createAction<Post>(`${groupSlice.name}/delete`),
}

export default groupSlice.reducer
