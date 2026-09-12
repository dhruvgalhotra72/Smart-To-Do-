import React from 'react'
import Navbar from './components/Navbar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <div>
      <Navbar />

      <h1>Smart To-Do Planner</h1>

      <TaskForm />

      <TaskList />
    </div>
  )
}

export default App