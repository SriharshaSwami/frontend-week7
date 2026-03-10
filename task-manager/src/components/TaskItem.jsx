function TaskItem({ task, toggleTaskStatus, deleteTask }) {
    return (
        <div className='border-2 bg-orange-200 p-3 my-2 rounded'>
            <p className={`text-xl ${task.isCompleted ? 'line-through text-gray-500' : ''}`}>{task.title}</p>
            <p className='text-sm'>Priority: {task.priority}</p>
            <div className='flex justify-center gap-2 mt-2'>
                <button
                    className='border-2 bg-green-200 px-2 py-1'
                    onClick={() => toggleTaskStatus(task.id)}
                >
                    {task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button
                    className='border-2 bg-red-200 px-2 py-1'
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TaskItem