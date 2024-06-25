import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (<div className="bg-orange-500 px-4 py-3">
        <NavLink className={`text-white hover:border-b-2 mx-2 active:border-b-2`} to="/home"  >Home</NavLink>
        <NavLink  className="text-white hover:border-b-2 mx-2 active:border-b-2" to="/contact">Contact</NavLink>
        <NavLink  className="text-white hover:border-b-2 mx-2 active:border-b-2" to="/about">About</NavLink>

    </div>)
}