import Card from './components/Card'
import Java from './images/java.png'
import C from './images/c.png'
import Python from './images/python.png'
import ReactImg from './images/react.png'

function App() {
  
  return (
    <>
      <h1 className="text-5xl font-bold bg-blue-500 p-8">
        Kurslarım
      </h1>
      <div className='flex flex-row mt-4'>
        <div className="basis-1/4 ">
          <Card image={ReactImg} title="React" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore, inventore velit excepturi magni vero, quas ea blanditiis natus alias recusandae earum dolorem iure voluptatem ducimus mollitia architecto incidunt esse." />
        </div>

        <div className="basis-1/4 ">
          <Card image={Java} title="Java" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore, inventore velit excepturi magni vero, quas ea blanditiis natus alias recusandae earum dolorem iure voluptatem ducimus mollitia architecto incidunt esse." />
        </div>

        <div className="basis-1/4 ">
          <Card image={C} title="C" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore, inventore velit excepturi magni vero, quas ea blanditiis natus alias recusandae earum dolorem iure voluptatem ducimus mollitia architecto incidunt esse." />
        </div>

        <div className="basis-1/4 ">
          <Card image={Python} title="Python" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore, inventore velit excepturi magni vero, quas ea blanditiis natus alias recusandae earum dolorem iure voluptatem ducimus mollitia architecto incidunt esse." />
        </div>
      </div>
      
      
    </>
  )
}

export default App
