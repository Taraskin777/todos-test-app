import { useState, useEffect, useRef } from "react"
import { TodoList } from "./TodoList"
import { ITodo } from "../types/data"
import "./styles.css"

const App: React.FC = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState<ITodo[]>([])
  console.log(value)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") addTodo()
  }

  const addTodo = () => {
    if (value) {
      ;+setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ])
      setValue("")
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
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          ref={inputRef}
          className=""
        />
        <button className="add-todo" onClick={addTodo}>
          Add
        </button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App
