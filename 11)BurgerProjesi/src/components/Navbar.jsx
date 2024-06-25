
import { Link } from 'react-router-dom'
import BurgerLogo from '../assets/burgerlogo.png'

export default function Navbar(){
    return(<div className='flex items-center justify-between px-10 py-4 text-white bg-red-800'>
        <img src={BurgerLogo} className='w-24' alt="" />
        <div className='flex gap-5'>
            <Link className='border-b-2 border-red-800 hover:border-white' to={"/"}>Home</Link>
            <Link  className='border-b-2 border-red-800 hover:border-white' to={"/menu"}>Menu</Link>
            <Link  className='border-b-2 border-red-800 hover:border-white' to={"/about"}>About</Link>
            <Link  className='border-b-2 border-red-800 hover:border-white' to={"/contact"}>Contact</Link>
        </div>
    </div>)
}