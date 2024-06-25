import { useState } from 'react'
import Serach from './components/Search'
import ImagesCard from './components/ImagesCard'

function App() {
  const [searchText, setSearchText] = useState("")
  const [imagesList,setImagesList] = useState([])
  const searchs = {searchText, setSearchText}
  return (
    <div>
        <h1 className='text-3xl bg-blue-600 text-white'>Hello World</h1>
        <Serach searchs = {searchs} setImagesList = {setImagesList} />
        <ImagesCard imagesList={imagesList}/>
    </div>
  )
}

export default App
