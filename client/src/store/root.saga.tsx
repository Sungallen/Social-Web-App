import { userWatchSaga } from 'features/store/user.saga'
import { all, fork } from 'redux-saga/effects'

export function* rootSaga() {
  yield all([fork(userWatchSaga)])
}

export default rootSaga
