function TasksList({tasks}){

    return (
        <div>
            <h3 className="text-2xl">Tasks List</h3>
            {
                tasks.length === 0 ? (<p className="text-2xl text-red-500">Empty</p>) : (tasks.map((taskObj, idx) => <p className="text-2xl bg-orange-300" key={idx}>{taskObj.taskName}</p>))
            }
    
        </div>
        )
    }
export default TasksList