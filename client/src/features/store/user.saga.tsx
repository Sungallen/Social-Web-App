import { SagaIterator } from '@redux-saga/core'
import {
  registerApi,
  uploadProfileImageApi,
  userLoginApi,
  userSharePostApi,
} from 'features/hooks/user.api'
import { takeEvery, call, CallEffect, put, PutEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { ILoginActionPayload, IUser, IRegisterPayload, IUserLogin } from 'features/types/user.types'
import { userActions, userSlice } from './user.slice'

type TUser = Generator<CallEffect<void> | PutEffect<any>, void, IUserLogin>

function* userLogin(action: PayloadAction<ILoginActionPayload>): TUser {
  const response: IUserLogin = yield call(
    userLoginApi,
    action.payload.account,
    action.payload.password,
  )
  if (response.token !== '') {
    yield put(userSlice.actions.setUserInfo(response))
  }
}

function* userRegister(action: PayloadAction<IRegisterPayload>): TUser {
  yield call(registerApi, action.payload)
}

function* userUploadProfileImage(action: PayloadAction<any>): TUser {
  yield call(uploadProfileImageApi, action.payload?.image, action.payload?.token)
}

function* userUploadPost(action: PayloadAction<any>): TUser {
  yield call(userSharePostApi, action?.payload, action.payload?.token)
}

export function* userWatchSaga(): SagaIterator {
  yield takeEvery('user/loginSaga', userLogin)
  yield takeEvery(userActions.registerSaga.type, userRegister)
  // yield takeEvery(userActions.uploadProfileImageSaga.type, userUploadProfileImage)
  yield takeEvery(userActions.sharePostSaga.type, userUploadPost)
}
