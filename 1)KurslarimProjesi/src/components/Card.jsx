
export default function Card ({image , title , desc}) {
    console.log(title)
    console.log(desc)
    return(<div className="hover:-mt-4 bg-blue-500 p-2 rounded-lg m-2  hover:bg-gray-300 hover:duration-500 cursor-pointer">
    <img className="size-60 group" src={image} alt="" />
    <h1 className="font-bold text-2xl group">{title}</h1>
    <p className="group">{desc}</p>
    </div>)
} 