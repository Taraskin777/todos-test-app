import React from "react"
import { ITodo } from "../types/data"
import { useAppDispatch } from "../store/hooks"
import { toggleTodo, removeTodo } from "../store/slice"

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
    <div className="todo-item">
      <input type="checkbox" checked={complete} onChange={toggleCheckbox} />
      <span onClick={toggleCheckbox}>{title}</span>
      <button onClick={() => dispatch(removeTodo(id))}>x</button>
      {/* {showStatus && <span className="status">{status}</span>} */}
    </div>
  )
}
