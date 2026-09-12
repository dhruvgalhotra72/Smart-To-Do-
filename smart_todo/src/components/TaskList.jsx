import React from 'react'
import TaskItem from './TaskItem'

const TaskList = () => {

    const tasks = [
        {
            id: 1,
            title: 'Complete React project',
            priority: 'High'
        },
        {
            id: 2,
            title: 'Practice Java',
            priority: 'Medium'
        },
        {
            id: 3,
            title: 'Practice DSA',
            priority: 'Low'
        }
    ]

    return (
        <div className="task-list">

            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                />
            ))}

        </div>
    )
}

export default TaskList