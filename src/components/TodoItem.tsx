import React from "react"
import { ITodo } from "../types/data"
import { useAppDispatch } from "../store/hooks"
import { toggleTodo, removeTodo } from "../store/slice"

export const TodoItem: React.FC<ITodo> = (props: ITodo) => {
  const dispatch = useAppDispatch()

  const { id, title, complete } = props

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={complete}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <span>{title}</span>
      <button onClick={() => dispatch(removeTodo(id))}>x</button>
    </div>
  )
}
