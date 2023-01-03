import { SagaIterator } from '@redux-saga/core'
import { call, put, takeEvery } from 'redux-saga/effects'
import { createNewGroupApi, getGroupsApi } from 'features/hooks/groups.api'
import { IGroup, IGroupCardProps } from 'features/types/group.types'
import { groupActions, groupSlice } from 'features/store/group.slice'
import { PayloadAction } from '@reduxjs/toolkit'

// Worker Sagas
// export function* onGetPosts(): SagaIterator {
//   const posts: Post[] = yield call(getPosts)
//   yield put(postsActions.fetchAllSucceeded(posts))
// }

// Worker Sagas
export function* onGetGroups(action: PayloadAction<any>): SagaIterator {
  const res = yield call(getGroupsApi, action.payload.token)
  yield put(groupSlice.actions.setGroupList(res))
}

function* onCreateGroup({
  payload,
}: {
  type: typeof groupActions.createNewGroupSaga
  payload: IGroup
}): SagaIterator {
  yield call(createNewGroupApi, payload)
  yield put(groupActions.createNewGroupSaga(payload))
}

// function* onUpdatePost({
//   payload,
// }: {
//   type: typeof postsActions.update
//   payload: Post
// }): SagaIterator {
//   yield call(updatePost, payload)
//   yield put(postsActions.fetchAll())
// }

// function* onDeletePost({
//   payload,
// }: {
//   type: typeof postsActions.delete
//   payload: Post
// }): SagaIterator {
//   yield call(deletePost, payload)
//   yield put(postsActions.fetchAll())
// }

// Watcher Saga
export function* groupsWatcherSaga(): SagaIterator {
  yield takeEvery(groupActions.fetchAllGroupSaga.type, onGetGroups)
  yield takeEvery(groupActions.createNewGroupSaga.type, onCreateGroup)
  // yield takeEvery(postsActions.update.type, onUpdatePost)
  //   yield takeEvery(postsActions.delete.type, onDeletePost)
}

export default groupsWatcherSaga
