import {useForm} from 'react-hook-form'

function AddTask({addNewTask}){
    const {register, handleSubmit, setError, formState:{errors}, reset} = useForm()

    const FormSubmit = (taskObj) =>{
        addNewTask(taskObj)
        reset()
    }
    return (
        <div>
            <h3 className='text-2xl'>Add Task</h3>
            <form onSubmit={handleSubmit(FormSubmit)}>
                <input className='border-2 bg-blue-200' type="text" {...register("taskName")} placeholder='Task Name'/> <br />
                <input className="my-4 border-2 bg-blue-300 px-2" type="submit" placeholder='Add New Task'/>
            </form>
        </div>
    )
}

export default AddTask