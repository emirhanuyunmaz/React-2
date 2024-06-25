
export default function ImagesCard({imagesList}){
    return (
    <div className="flex justify-center">
        <div className="columns-3">
        {imagesList && imagesList.map(img =><div className="group"> 
        <img className="p-2 border  rounded-lg border-gray-500  box-border group-hover:scale-110 cursor-pointer duration-500" key={img.id} src={`${img.urls.small}`} />
        <p className="absolute invisible group-hover:visible group-hover:-mt-16 text-white duration-500">{img.alt_description}</p>
        </div> ) }
        </div>
    </div>)
}