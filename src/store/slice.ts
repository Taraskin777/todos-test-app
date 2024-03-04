import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "."

interface Todo {
  id: number
  title: string
  complete: boolean
}

interface TodosState {
  newTodo: string
  todos: Todo[]
  searchTodo: string
  minLength: number
}

const initialState: TodosState = {
  newTodo: "",
  searchTodo: "",
  todos: [],
  minLength: 15,
}

const slice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setNewTodo: (state, action: PayloadAction<string>) => {
      state.newTodo = action.payload
    },
    setTodos: (state) => {
      if (
        state.newTodo.trim() !== "" &&
        state.newTodo.length <= state.minLength
      ) {
        const newTodo: Todo = {
          id: Date.now(),
          title: state.newTodo,
          complete: false,
        }
        state.todos.push(newTodo)
        state.newTodo = ""
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.complete = !todo.complete
      }
    },
  },
})

export const { setNewTodo, setTodos, removeTodo, toggleTodo } = slice.actions

export const todoState = (state: RootState): object => state.todoData

export default slice.reducer
