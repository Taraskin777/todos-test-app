import { configureStore } from "@reduxjs/toolkit"
import slidesReducer from "./slice"

const store = configureStore({
  reducer: {
    todoData: slidesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
