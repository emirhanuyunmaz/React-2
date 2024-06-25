import { useReducer, useState } from 'react'

//Burada verilen başlangıç değerine göre tanımlanan action değerlerine göre işlemler yapılmaktadır.

const initial = 0
const reducer = (state , action) =>{
  switch(action){
    case "increment" :
      return state +1
    case "decrement" :
      return state -1
    case "reset":
      return initial
    default:
      return state
  }
}


function App() {
  //Burada count değişken dispatch ise fonk. değerlerini ifade etmektedir.
  
  const [count,dispatch] = useReducer(reducer,initial)
  
  return (
    <div className=''>
        <h1 className='bg-blue-600 text-white'>Hello World</h1>

        <div className='flex justify-center flex-col'>
          <h1 className='text-center'>Sayı : {count}</h1>
          <div className='flex justify-center'>
          <button className='bg-blue-500 rounded-xl px-4 py-1 hover:bg-blue-600 duration-500' onClick={() =>dispatch("increment") } >Increment</button>
          <button className='bg-blue-500 rounded-xl px-4 py-1 hover:bg-blue-600 duration-500' onClick={() =>dispatch("decrement") } >Decrement</button>
          <button className='bg-blue-500 rounded-xl px-4 py-1 hover:bg-blue-600 duration-500' onClick={() =>dispatch("reset") } >Reset</button>
          </div>
        </div>

    </div>
  )
}

export default App
