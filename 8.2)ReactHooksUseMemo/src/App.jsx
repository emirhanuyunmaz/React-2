import { useMemo, useState } from 'react'


function App() {
  const [inputValue,setInputValue] = useState(0)
  const [themeC,setTheme] = useState("bg-red-500")
  const slowFunc = (num) => {
    for(let i = 0; i<1000000000;i++ ){}
    return num * 2
  }
  //Eğer use memo kullanmazsak güncellem işlemi yapılırken arka plan rengi de geç gelecektir.
  //Buradaki işlem sayesinde cache mermory den eski veriyi almaktadır. 
  const doubleNumber = useMemo(() => {
    return slowFunc(inputValue)
  },[inputValue])
 

  const changeTheme = () => {
    if(themeC === "bg-red-500"){
      setTheme("bg-blue-500")
    }else{
      setTheme("bg-red-500")
    }
  }


  return (
    <div className=''>
      <h1 className={`${themeC} text-white`}>{doubleNumber}</h1>
      <div>
        <input value={inputValue} onChange={(prev) => {setInputValue(prev.target.value)}} type="number" className='border-2 border-gray-500 rounded-xl px-2 py-1'  />
        <button onClick={changeTheme} className='bg-blue-400 hover:bg-blue-500 px-2 py-1 rounded-2xl duration-500' >Theme Change</button>
        <h2>Sayaç : </h2>
      </div>
    </div>

  )
}

export default App
