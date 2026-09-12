import React from 'react'
import Navbar from './components/Navbar'
import TaskForm from './components/TaskForm'

const App = () => {
  return (
    <div>
      <Navbar />

      <h1>Smart To-Do Planner</h1>

      <TaskForm />
    </div>
  )
}

export default App