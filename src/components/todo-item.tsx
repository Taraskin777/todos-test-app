import React from 'react'
import { ITodo } from '../types/data'
import { useAppDispatch } from '../store/hooks'
import { toggleTodo, removeTodo } from '../store/slice'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { motion } from 'framer-motion'

export const TodoItem: React.FC<ITodo> = (props: ITodo) => {
  const dispatch = useAppDispatch()

  const { id, title, complete } = props

  const toggleCheckbox = (): void => {
    dispatch(toggleTodo(id))
  }

  return (
    <motion.div
      initial={{ 'opacity': 0 }}
      animate={{ 'opacity': 1 }}
      exit={{ 'opacity': 0 }}
      transition={{ 'duration': 0.3 }}
      className='todo-item'
    >
      <Checkbox checked={complete} onChange={toggleCheckbox} />
      <span onClick={toggleCheckbox} className='todo_title'>
        {title}
      </span>
      <IconButton onClick={() => dispatch(removeTodo(id))}>
        <DeleteIcon />
      </IconButton>
    </motion.div>
  )
}
