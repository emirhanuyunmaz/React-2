import { useState } from 'react'
import Course from './components/Course'


function App() {
  const [numbers, setNumbers] = useState([])
  function handleClick(){
    const randomNumber  = (Math.floor(Math.random() * 4))
    setNumbers((props) => [...props,randomNumber])
    //console.log(numbers)
  }


  return (
    <div className='w-9/12 mx-auto'>
      <div className='flex justify-center'>
        <button onClick={handleClick} className='bg-gray-400 px-12 py-4 rounded-md  hover:bg-gray-500 text-white text-3xl'>Kurs Ekle</button>
      </div>
      <Course numbers={numbers}/>
    </div>
  )
}

export default App
