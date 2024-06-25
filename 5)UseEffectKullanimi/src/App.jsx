import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='bg-blue-200 h-lvh flex flex-col flex-nowrap '>
      <h1 className="text-5xl font-bold p-3 bg-blue-400 text-center">
        Todo App
      </h1>
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default App
