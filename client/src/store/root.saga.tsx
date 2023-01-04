import { groupsWatcherSaga } from 'features/store/group.saga'
import { userWatchSaga } from 'features/store/user.saga'
import { all, fork } from 'redux-saga/effects'

export function* rootSaga() {
  yield all([fork(userWatchSaga), fork(groupsWatcherSaga)])
}

export default rootSaga
