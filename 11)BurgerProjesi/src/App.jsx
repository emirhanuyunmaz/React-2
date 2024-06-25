import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './layout/Home'
import Menu from './layout/Menu'
import About from './layout/About'
import Contact from './layout/Contact'
import Navbar from './components/Navbar'
import NotFound from './layout/NotFound'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
