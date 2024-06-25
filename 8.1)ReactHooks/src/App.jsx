import { useState } from 'react'
import CounterComponent from './CounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='bg-black text-white' >Hello World</h1>
      <CounterComponent/>
    </div>
  )
}

export default App
