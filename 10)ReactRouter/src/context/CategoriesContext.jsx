import { createContext, useEffect, useState } from "react";

const CategoriesContext = createContext()

function CategoryProvider({children}){
    
    const [categories ,setCategories] = useState([])

    async function getCategories (){

        const allCategories = await fetch(`https://fakestoreapi.com/products/categories`)
                                .then((res) => res.json())
        setCategories(allCategories)
    } 
    
    useEffect(() => {
        getCategories()
    },[])

    return(<CategoriesContext.Provider value={{categories}}>
        {children}
    </CategoriesContext.Provider>)
}

export {CategoriesContext,CategoryProvider}