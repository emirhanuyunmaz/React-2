import { NavLink } from "react-router-dom"

export default function Categories({categories}){
    

    return(<div className="bg-orange-400 text-white rounded-xl mt-4">    
        {categories.map((category,index) => <NavLink className="block mb-3 py-2 ps-2 hover:bg-orange-600 hover:rounded-xl " key={index} to={`/${category}`} >{category.toUpperCase()}</NavLink>)}

    </div>)
}