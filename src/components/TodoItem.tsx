import React from "react"
import { ITodo } from "../types/data"

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

export const TodoItem: React.FC<ITodoItem> = (props: ITodoItem) => {
  const { id, title, complete, removeTodo, toggleTodo } = props

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={complete}
        onChange={(): void => toggleTodo(id)}
      />
      <span>{title}</span>
      <button onClick={(): void => removeTodo(id)}>x</button>
    </div>
  )
}
