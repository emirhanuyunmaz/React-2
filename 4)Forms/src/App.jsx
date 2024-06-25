import { useState } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

function App() {
  const [taskList, setTaskList] = useState([])
  const tasks = {
    taskList, setTaskList
  }

  return (
    <>
      <AddTask setTaskList = {setTaskList} />
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
