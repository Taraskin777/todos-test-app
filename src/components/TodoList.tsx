import React, { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem"
import { useAppSelector } from "../store/hooks"
import { ITodo } from "../types/data"

export const TodoList: React.FC = () => {
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([])

  const todos = useAppSelector((state) => state.todoData.todos)

  const showComplited = (): void => {
    setFilteredTodos(todos.filter((todo) => todo.complete === true))
  }

  const showAllTodos = (): void => {
    setFilteredTodos(todos)
  }

  useEffect(() => {
    setFilteredTodos(todos)
  }, [todos])

  return (
    <div className="todo-list">
      {todos.length > 0 && 
        <div>
          <button onClick={showComplited}>Completed</button>
          <button onClick={showAllTodos}>All</button>
        </div>
      }

      {filteredTodos.map((todo) => 
        <TodoItem key={todo.id} {...todo} />
      )}
    </div>
  )
}
