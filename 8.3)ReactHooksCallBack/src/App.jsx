import { useCallback, useState } from 'react'
import NumberList from './NumberList'


function App() {
  const [count, setCount] = useState(0)
  const [theme,setTheme] = useState("bg-red-400")

  function themeChang(){
    console.log("theme değişiti")
    if(theme === "bg-red-400"){
      setTheme("bg-blue-400")
    }else{
      setTheme("bg-red-400")
    }
  }

  //Buradaki fonk kullanıldığında hem renk hem sayılar yenilenir.
  function getItems(){
    return [count , count+1 , count + 2]
  }

  //Bu fonk sayesinde ön plandaki sayılar değişmeden arka plandaki renk değişiyor.
  const get_item = useCallback(() => {
    return [count , count+1 , count + 2]
  },[count])

  return (
    <div className={`${theme}`}>
      <h1 className='bg-gray-500 text-white'></h1>

      <input className='border-2 border-black rounded-lg' type="number" value={count} onChange={(e) => {setCount(parseInt(e.target.value))}} />
      <button onClick={themeChang} className='bg-yellow-300 hover:bg-yellow-500 duration-500 px-2 py-1 rounded-lg'>Theme Change</button>
      <NumberList getItems={get_item}/>
    </div>
  )
}

export default App
