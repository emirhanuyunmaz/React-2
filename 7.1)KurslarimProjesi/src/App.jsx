import { useContext, useEffect, useState } from 'react'
import { coursesContext } from './context/CoursesContext'
import Course from './components/Course'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'


function App() {

  const [singleCourse,setSingleCourse] = useState({})
  
  const {allData} = useContext(coursesContext)

  function singleRandomCourses(){
      let randomNumber = Math.floor(Math.random()*(allData.length))  
      setSingleCourse(allData[randomNumber])
      console.log("aaaa"+randomNumber)
  }

  useEffect(() => {
    singleRandomCourses()
  },[allData])

  function leftOnClick(){
    console.log("left : "+singleCourse.id)
    if(singleCourse.id == 0){
      setSingleCourse(allData[allData.length-1])
    }else{
      setSingleCourse(allData[singleCourse.id - 1])
    }
  }

  function rightOnClick(){
    console.log("right : "+singleCourse.id)
    if(singleCourse.id == (allData.length - 1)){
      setSingleCourse(allData[0])
    }else{
      setSingleCourse(allData[parseInt(singleCourse.id) + 1])
      console.log("adssad2132321321321321321321:::"+singleCourse.title)
    }
    
  }

  

  return (
    <div className='flex flex-col item-center'>
     <h1 className='bg-blue-500 text-white'>Hello World</h1>
      {/* {
        allData.map((course) => <p key={course.id}>{course.title}</p>)
      } */}
      <div className='flex justify-center gap-3 items-center'>
      {
        singleCourse ? <>
        <button onClick={leftOnClick} className='text-4xl'><FaArrowCircleLeft /></button>
        <Course getData = {singleCourse}/>
        <button onClick={rightOnClick} className='text-4xl'><FaArrowCircleRight/></button>
        </> :<></>
      }
      </div>
    </div>
  )
}

export default App
