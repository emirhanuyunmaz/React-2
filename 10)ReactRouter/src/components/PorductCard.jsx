
export default function ProductCard({product}){
    return (
    <div className="flex flex-col w-36 h-76 justify-between bg-orange-400 border-1 border-gray-400 rounded-xl p-2 m-2 group">
        <div className=" overflow-hidden h-52 w-30 ">
        <img className="max-h-52 min-h-52 max-w-30 min-w-30 group-hover:scale-125 duration-500" src={`${product.image}`} alt="" />
        </div>
        <h3>{product.title.slice(0,25)}...</h3>
        <div>
        <p>{product.price} $</p>
        <button className="bg-yellow-400 text-white invisible w-full group-hover:visible hover:bg-yellow-500 hover:duration-500 rounded-xl ">Buy</button>
        </div>
        
    </div>)
} 