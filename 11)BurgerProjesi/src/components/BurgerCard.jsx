import Burger from "../assets/burger.jpg" 

export default function BurgerCard(){
    return (<div className="border-2 border-gray-700 rounded-2xl  basis-1/2 md:basis-1/4 p-2 justify-center items-center cursor-pointer hover:shadow-xl duration-500">
        <img src={Burger} alt="" />
        <h3 className="text-2xl font-bold">Efso Burger</h3>
        <h6 className="font-bold text-sm">150 gr kasap burger ve kola </h6>
        <p className="text-red-500"><i>250TL</i></p>
    </div>)
}