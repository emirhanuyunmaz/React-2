
export default function ImageCard({item}){
    console.log(item);
    return(<div className="border-red-200 rounded-2xl">
        <img className="h-full" src={item.urls.thumb} alt="" />
    </div>)
}