import { SagaIterator } from '@redux-saga/core'
import { userLoginApi } from 'features/hooks/user.api'
import { takeEvery, call, CallEffect, put, PutEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { ILoginActionPayload, IUser } from 'features/types/user.types'
import { userSlice } from './user.slice'

type TUser = Generator<CallEffect<void> | PutEffect<any>, any, string>

function* userLogin(action: PayloadAction<ILoginActionPayload>): TUser {
  const response: IUser[] | string = yield call(
    userLoginApi,
    action.payload.account,
    action.payload.password,
  )
  if (Array.isArray(response)) {
    yield put(userSlice.actions.setUserInfo(response[0]))
  }
}

export function* userWatchSaga(): SagaIterator {
  yield takeEvery('user/loginSaga', userLogin)
}
