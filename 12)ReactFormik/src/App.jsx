import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Portal from './components/Portal'
import SignUp from './components/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-800 h-100vh grid grid-rows-3 '>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/portal' element={<Portal/>} />
      </Routes>

    </div>
  )
}

export default App
