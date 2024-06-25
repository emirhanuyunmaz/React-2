import { useState } from 'react'
import { useGetPokemonByNameQuery } from './store/pokemon/pokemonApi'


function App() {
  const [list,setList] = useState([])
  const { data, error, isLoading } = useGetPokemonByNameQuery('1')
  //console.log(data.forms[0].name) //pokemon name
  console.log(isLoading);
  return (
    <>
      {
        !isLoading && data.forms[0].name
        
      }
    </>
  )
}

export default App
