import { createContext, useEffect, useState } from "react";

const ProductContext = createContext()

function ProductProvider({children}){
    const [ products , setProducts ] = useState([])
    const [loading , setLoading] = useState(true)
    const [error,setError] = useState(false)

    async function getAllProducts(categoryName){
        console.log(categoryName)
        if(categoryName=== undefined){
            try{
                setProducts([])
                setLoading(true)
                setError(false)
                const data = await fetch(`https://fakestoreapi.com/products`)
                            .then((res) => res.json())
                setProducts(data)
                setLoading(false)
                setError(false)
            }catch (e){
                setError(true)
                setLoading(false)
                setProducts([])
            }
        }else{
            try{
                setProducts([])
                setLoading(true)
                setError(false)
                const data = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
                            .then((res) => res.json())
                setProducts(data)
                setLoading(false)
                setError(false)
            }catch (e){
                setError(true)
                setLoading(false)
                setProducts([])
            }
        }
    }

    
    

    return(<ProductContext.Provider value={{getAllProducts , products , loading , error }}>
        {children}
    </ProductContext.Provider>)
}

export {ProductProvider,ProductContext}