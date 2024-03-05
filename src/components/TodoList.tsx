import React from "react"
import { TodoItem } from "./TodoItem"
import { useAppSelector } from "../store/hooks"

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todoData.todos)

  return (
    <div className="todo-list">
      {todos.map((todo) => 
        <TodoItem key={todo.id} {...todo} />
      )}
    </div>
  )
}
