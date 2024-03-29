import React, { useRef, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { setNewTodo, setTodos } from '../store/slice'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import '@fontsource/roboto/500.css'
import './styles.css'

export const Input: React.FC = () => {
  const data = useAppSelector((state) => state.todoData)
  const { newTodo, todos, message } = data
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setNewTodo(event.target.value))
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
    if (event.key === 'Enter') addTodo()
  }

  const addTodo = (): void => {
    if (newTodo) {
      dispatch(setTodos())
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [todos])

  return (
    <div>
      <div className='warning'>{message}</div>
      <TextField
        id='outlined-basic'
        label='New todo'
        variant='outlined'
        ref={inputRef}
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        size='small'
        autoComplete='off'
        inputProps={{
          'style': {
            'width': 400,
            'height': '25px',
          },
        }}
        sx={{
          'marginBottom': '30px',
        }}
      />
      <Button variant='outlined' className='add-todo' onClick={addTodo}>
        Add
      </Button>
    </div>
  )
}
