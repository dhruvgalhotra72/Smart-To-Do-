import React, { useState } from 'react'

const TaskForm = () => {

    const [title, setTitle] = useState('')

    return (
        <form className="task-form">

            <input
                type="text"
                placeholder="Enter your task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button type="submit">
                Add Task
            </button>

        </form>
    )
}

export default TaskForm