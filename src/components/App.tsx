import React from 'react'
import { TodoList } from './todo-list'
import { Input } from './input'

import './styles.css'

const App: React.FC = () => {
  return (
    <div className='main'>
      <div>
        <h2>Please, add ToDo list below</h2>
        <Input />
      </div>
      <TodoList />
    </div>
  )
}

export default App
