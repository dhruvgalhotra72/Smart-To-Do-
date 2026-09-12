import React from 'react'

const TaskItem = ({ task }) => {
    return (
        <div className="task-item">

            <input type="checkbox" />

            <div className="task-info">
                <h3>{task.title}</h3>
                <p>Priority: {task.priority}</p>
            </div>

            <button>
                Delete
            </button>

        </div>
    )
}

export default TaskItem