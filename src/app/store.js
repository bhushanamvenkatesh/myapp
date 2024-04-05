import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/couterSlice"
import todoReducer from '../features/todos/todosSlice'
export const store = configureStore({
  reducer: {
    c:counterReducer,
    todos:todoReducer
  },
})