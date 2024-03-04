import React, { useState, useEffect, useRef } from "react"
import { TodoList } from "./TodoList"
// import { Input } from "./Input"
import { ITodo } from "../types/data"
import { useAppSelector, useAppDispatch } from "../store/hooks"
import { setNewTodo } from "../store/slice"
import "./styles.css"

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const inputValue = useAppSelector((state) => state.todoData.newTodo)
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setNewTodo(e.target.value))
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") addTodo()
  }

  const addTodo = (): void => {
    if (inputValue) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: inputValue,
          complete: false,
        },
      ])
      dispatch(setNewTodo(""))
    }
  }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo
        }
        return {
          ...todo,
          complete: !todo.complete,
        }
      })
    )
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [todos])

  return (
    <div className="main">
      <div>
        <h2>Please, add ToDo list below</h2>
        <input
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          ref={inputRef}
          className=""
        />
        <button className="add-todo" onClick={addTodo}>
          Add
        </button>
        {/* <Input /> */}
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App
