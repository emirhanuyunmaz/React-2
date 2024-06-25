import { useState } from 'react'
import NewPerson from './components/NewPerson'
import PersonList from './components/PersonList'


function App() {
  const [count, setCount] = useState(0)
  //Burada bir rehber uygulaması olacak ve kişileri güncelleme işlemi de yapılabilecek.

  return (
    <>
    <h1 className="text-3xl font-bold underline bg-black text-white">
      Hello world!
    </h1>
    <NewPerson/>
    <PersonList/>
    </>
  )
}

export default App
