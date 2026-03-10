import { useForm } from 'react-hook-form'

function AddTaskForm({ addNewTask }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const formSubmit = (taskData) => {
        addNewTask(taskData)
        reset()
    }

    return (
        <div>
            <h3 className='text-2xl'>Add Task</h3>
            <form onSubmit={handleSubmit(formSubmit)} className='my-2'>
                <input
                    className='border-2 bg-blue-200 px-2 py-1'
                    type='text'
                    placeholder='Task Title'
                    {...register('title', {
                        required: 'Title is required',
                        minLength: {
                            value: 3,
                            message: 'Title must be at least 3 characters'
                        }
                    })}
                />
                {errors.title && <p className='text-red-600'>{errors.title.message}</p>}

                <select
                    className='border-2 bg-blue-200 px-2 py-1 mt-3 w-full'
                    defaultValue=''
                    {...register('priority', { required: 'Priority is required' })}
                >
                    <option value='' disabled>Select Priority</option>
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                </select>
                {errors.priority && <p className='text-red-600'>{errors.priority.message}</p>}

                <input className='my-4 border-2 bg-blue-300 px-3 py-1' type='submit' value='Add Task' />
            </form>
        </div>
    )
}

export default AddTaskForm