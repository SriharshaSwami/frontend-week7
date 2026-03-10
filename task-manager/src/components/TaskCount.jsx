function TaskCount({tasks}){
    return(
        <div>
            <h3 className="text-2xl">Tasks Count</h3>
            <p>{tasks.length}</p>
        </div>
    )
}

export default TaskCount