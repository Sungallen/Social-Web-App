import { SagaIterator } from '@redux-saga/core'
import { call, put, takeEvery } from 'redux-saga/effects'
import { createGroup, getGroups } from 'features/hooks/groups.api'
import { IGroupCardProps } from 'features/types/group.types'
import { groupActions } from 'features/store/group.slice'

// Worker Sagas
export function* onGetGroups(): SagaIterator {
  const groups: IGroupCardProps[] = yield call(getGroups)
  yield put(groupActions.fetchAllSucceededSaga(groups))
}

function* onCreateGroup({
  payload,
}: {
  type: typeof groupActions.createNewGroupSaga
  payload: IGroupCardProps | any
}): SagaIterator {
  yield call(createGroup, payload)
  yield put(groupActions.fetchAllGroupSaga())
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
  // yield takeEvery(postsActions.update.type, onUpdatePost)
  //   yield takeEvery(postsActions.delete.type, onDeletePost)
  yield takeEvery(groupActions.createNewGroupSaga.type, onCreateGroup)
}

export default groupsWatcherSaga
