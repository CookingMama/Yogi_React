import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import todoSlice from "./todo/todoSlice"
import userSlice from './user/userSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    homeTodos: todoSlice,
    user:userSlice
  }
})