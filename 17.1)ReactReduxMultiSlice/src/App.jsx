import { useState } from 'react'
import Counter from './components/Counter'
import Todo from './components/Todo'


function App() {
  const [count, setCount] = useState(0)

  // Todo and counter redux ile yapılacak 

  return (
    <>
      <Counter/>
      <hr />
      <Todo/>
    </>
  )
}

export default App
