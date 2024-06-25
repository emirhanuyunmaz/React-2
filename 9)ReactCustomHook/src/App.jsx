import { useState } from 'react'
import useTitleChange from './useTitleChange'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   document.title = `Sayı : ${count}`
  // },[count])

  //yukarıda yapılan işlemi daha düzenli bir biçimde yapmamıza olanak sağlayan kendi hook yapımızı yaptık.
  useTitleChange(count)

  return (
    <div>
      <h1 className='bg-black text-white' >{count}</h1>

      <button onClick={() => setCount(count+1)} className='bg-gray-700 text-white hover:bg-gray-900 duration-500 px-2 py-1 rounded-2xl'>Add</button>
    </div>
  )
}

export default App
