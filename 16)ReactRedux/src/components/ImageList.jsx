import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../store/movieStore/movieSlice"
import Loading from "./Loading"
import ImageCard from "./ImageCard"
import ErrorComp from "./ErrorComp"

export default function ImageList(){


    const data = useSelector((state) => state.movie)
    const dispatch = useDispatch()
    
    useEffect(() =>{
      dispatch(getPosts())
    },[dispatch])
    //console.log(data)
    

    return(<div className="pt-20 flex justify-center h-full">
        <div className="flex flex-wrap w-3/4 h-full gap-3">
            {data.isError ? (<ErrorComp/>) : (
                data.isLoading ? (<Loading/>) :(data.dataList.map((item) => <ImageCard key={item.id} item = {item} />) )
            )}
        </div>
    </div>)
}