import Home from './layouts/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './layouts/About'
import Contact from './layouts/Contact'
//1)Fake Store

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/:categoryName' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
