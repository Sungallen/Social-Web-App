import { SagaIterator } from '@redux-saga/core'
import { registerApi, userLoginApi } from 'features/hooks/user.api'
import { takeEvery, call, CallEffect, put, PutEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { ILoginActionPayload, IUser, IRegisterPayload } from 'features/types/user.types'
import { userActions, userSlice } from './user.slice'

type TUser = Generator<CallEffect<void> | PutEffect<any>, void, string>

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

function* userRegister(action: PayloadAction<IRegisterPayload>): TUser {
  console.log(action.payload)
  yield call(registerApi, action.payload)
}

export function* userWatchSaga(): SagaIterator {
  yield takeEvery('user/loginSaga', userLogin)
  yield takeEvery(userActions.registerSaga.type, userRegister)
}
