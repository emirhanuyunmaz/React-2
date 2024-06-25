import { useParams } from "react-router-dom"
import Products from "../components/Porducts"
import Categories from "../components/Categories"
import { CategoriesContext } from "../context/CategoriesContext"
import { useContext, useEffect } from "react"
import { ProductContext } from "../context/PorductsContext"
import Loading from "../components/Loading"
import ErrorComp from "../components/ErrorComp"

export default function Home (){
    //Link üzerindeki uzantıyı verir...
    const {categoryName} = useParams()

    const {categories} = useContext(CategoriesContext)
    const {products,loading,error,getAllProducts} = useContext(ProductContext)
    useEffect(() => {
        getAllProducts(categoryName)
    },[categoryName])


    return (<div className="flex  justify-center">
        {error ? (<ErrorComp />) : (loading ? <Loading/> : <>
        <div className="basis-3/4 flex flex-col justify-center items-center">
            <Products categoryName = {categoryName} products ={products}/>
        </div>
        <div className="basis-1/4  ">
            <Categories categories={categories} />
        </div></> )}
        
        
    </div>)
}