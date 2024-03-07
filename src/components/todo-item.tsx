import React from 'react'
import { ITodo } from '../types/data'
import { useAppDispatch } from '../store/hooks'
import { toggleTodo, removeTodo } from '../store/slice'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

export const TodoItem: React.FC<ITodo> = (props: ITodo) => {
  // const [status, setStatus] = useState<string>("")
  // const [showStatus, setShowStatus] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const { id, title, complete } = props

  // const handleTaskStatus = (): (() => void) => {
  //   if (complete) {
  //     setStatus("Completed")
  //   } else setStatus("Uncompleted")
  //   if (!showStatus) {
  //     setShowStatus(true)
  //     const timer = setTimeout(() => {
  //       setShowStatus(false)
  //     }, 3000)
  //     return () => clearTimeout(timer)
  //   }
  //   return () => {}
  // }

  const toggleCheckbox = (): void => {
    dispatch(toggleTodo(id))
  }

  return (
    <div className='todo-item'>
      <Checkbox checked={complete} onChange={toggleCheckbox} />
      <span onClick={toggleCheckbox} className='todo_title'>
        {title}
      </span>
      <IconButton onClick={() => dispatch(removeTodo(id))}>
        <DeleteIcon />
      </IconButton>
      {/* {showStatus && <span className="status">{status}</span>} */}
    </div>
  )
}
