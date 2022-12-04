import { createBrowserHistory } from 'history'
import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import Env from 'config/env'
import { createReduxHistoryContext } from 'redux-first-history'
import logger from 'redux-logger'
import { rootSaga } from 'store/root.saga'
import userReducer from 'features/store/user.slice'

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  reduxTravelling: Env.isDev(),
  savePreviousLocations: 1,
})

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: {
      user: userReducer,
      router: routerReducer,
    },
    devTools: Env.isDev(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ thunk: false, serializableCheck: false })
        .concat(sagaMiddleware)
        .concat(routerMiddleware)
        .concat(logger),
  })

  sagaMiddleware.run(rootSaga)
  return store
}

export const store = makeStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const history = createReduxHistory(store)
