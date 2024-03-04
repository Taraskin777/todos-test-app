import React, { useRef } from "react"
// import { ITodo } from "../types/data"
import { useAppSelector, useAppDispatch } from "../store/hooks"
import { setNewTodo, setTodos } from "../store/slice"
import "./styles.css"

export const Input: React.FC = () => {
  const data = useAppSelector((state) => state.todoData)
  const { newTodo } = data
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setNewTodo(e.target.value))
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") addTodo()
  }

  const addTodo = (): void => {
    if (newTodo) {
      dispatch(setTodos())
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="add-todo" onClick={addTodo}>
        Add
      </button>
    </>
  )
}
