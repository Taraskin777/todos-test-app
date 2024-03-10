import React, { useEffect, useState } from 'react'
import { TodoItem } from './todo-item'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { ITodo } from '../types/data'
import { filterByComplete } from '../store/slice'
import Button from '@mui/material/Button'
import { AnimatePresence } from 'framer-motion'

export const TodoList: React.FC = () => {
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([])

  const dispatch = useAppDispatch()

  const data = useAppSelector((state) => state.todoData)
  const { todos } = data
  const completedTodos = useAppSelector((state) => state.todoData.completed)

  const showCompleted = (): void => {
    setFilteredTodos(todos.filter((todo) => todo.complete === true))
  }

  const showAllTodos = (): void => {
    setFilteredTodos(todos)
  }

  const showCurrent = (): void => {
    setFilteredTodos(todos.filter((todo) => todo.complete === false))
  }

  useEffect(() => {
    setFilteredTodos(todos)
    dispatch(filterByComplete())
  }, [todos])

  return (
    <div className='todo-list'>
      {todos.length > 0 &&
        <div>
          <div className='filter_btn'>
            <Button onClick={showAllTodos} variant='contained'>
            All
            </Button>
            <Button onClick={showCompleted} variant='contained'>
            Completed
            </Button>
            <Button onClick={showCurrent} variant='contained'>Current</Button>
          </div>
          <div className='task_counter_wrapper'>
            <span className='task_counter'>All tasks: {todos.length}</span>
            <span className='task_counter'>
            Completed tasks: {completedTodos.length}
            </span>
          </div>
        </div>
      }
      <AnimatePresence>
        {filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      </AnimatePresence>
    </div>
  )
}
