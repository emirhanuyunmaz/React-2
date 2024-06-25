import Counter from "./components/Counter"
import Input from "./components/Input"
import PersonList from "./components/PersonList"
import PropsComponents from "./components/PropsComponents"


function App() {

  const personList =[
    {
      id:1,
      name:"Ali"
    },
    {
      id:2,
      name:"Veli"
    },
    {
      id:3,
      name:"Ayşe"
    },
    {
      id:4,
      name:"Fatma"
    }
  ]

  return (
    <>
      {/* <PropsComponents name={"Emirhan"} surname={"Uyunmaz"} /> */}
      {/* <PersonList userList={personList} /> */}
      {/* <Counter/> */}
      <Input/>
    </>
  )
}

export default App
