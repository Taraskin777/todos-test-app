import React, { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem"
import { useAppSelector, useAppDispatch } from "../store/hooks"
import { ITodo } from "../types/data"
import { filterByComplete } from "../store/slice"
import Button from "@mui/material/Button"

export const TodoList: React.FC = () => {
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([])

  const dispatch = useAppDispatch()

  const todos = useAppSelector((state) => state.todoData.todos)
  const completedTodos = useAppSelector((state) => state.todoData.completed)

  const showCompleted = (): void => {
    setFilteredTodos(todos.filter((todo) => todo.complete === true))
  }

  const showAllTodos = (): void => {
    setFilteredTodos(todos)
  }

  useEffect(() => {
    setFilteredTodos(todos)
    dispatch(filterByComplete())
  }, [todos])

  return (
    <div className="todo-list">
      {todos.length > 0 && 
        <div className="filter_btn">
          <Button onClick={showAllTodos} variant="contained">All</Button>
          <Button onClick={showCompleted} variant="contained">Completed</Button>
          <span className="task_counter">All tasks: {todos.length}</span>
          <span className="task_counter">Completed tasks: {completedTodos.length}</span>
        </div>
      }
      {filteredTodos.map((todo) => 
        <TodoItem key={todo.id} {...todo} />
      )}
    </div>
  )
}
