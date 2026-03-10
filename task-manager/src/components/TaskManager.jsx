import { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'

function TaskManager(){
    const [tasks, setTask] = useState([])

    const addNewTask = (taskObj) => {
        const newTask = {
            id: Date.now(),
            title: taskObj.title,
            priority: taskObj.priority,
            isCompleted: false
        }
        setTask([...tasks, newTask])
    }

    const toggleTaskStatus = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
        )
        setTask(updatedTasks)
    }

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId)
        setTask(updatedTasks)
    }

    const completedTasksCount = tasks.filter((task) => task.isCompleted).length

    return (
        <div className='text-center m-4 bg-amber-200'>
            <h1 className='text-3xl'>Task Manager</h1><hr className='border'/>
            <p className='my-2 text-lg'>Total Tasks: {tasks.length} | Completed: {completedTasksCount}</p>
            <div className='flex justify-around gap-4 flex-wrap'>
                <AddTaskForm addNewTask={addNewTask} />
                <TaskList
                    tasks={tasks}
                    toggleTaskStatus={toggleTaskStatus}
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    )
}

export default TaskManager