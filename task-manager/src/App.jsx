import './App.css'
import TaskManager from './components/TaskManager';

function App(){
  //state(optional)
  //return react element(mandatory)
  
  return (
    <div className='border-2 bg-blue-300 mx-4 my-4 text-center'>
        <TaskManager />
    </div>
  )
}

export default App;