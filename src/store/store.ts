import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { Slices, Actions } from './slices'

// create saga middleware
const SagaMiddleware = createSagaMiddleware()

// create store
export const store = configureStore({
  reducer: Slices,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(SagaMiddleware)
  },
})

// root state
export type RootState = ReturnType<typeof store.getState>

// export app dispatch
export type AppDispatch = typeof store.dispatch

// export app actions
export const AppActions = Actions
