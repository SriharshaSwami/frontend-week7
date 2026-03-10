import TaskItem from './TaskItem'

function TaskList({ tasks, toggleTaskStatus, deleteTask }) {
    return (
        <div>
            <h3 className='text-2xl'>Tasks List</h3>
            {
                tasks.length === 0
                    ? <p className='text-2xl text-red-500'>Empty</p>
                    : tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            toggleTaskStatus={toggleTaskStatus}
                            deleteTask={deleteTask}
                        />
                    ))
            }
        </div>
    )
}

export default TaskList