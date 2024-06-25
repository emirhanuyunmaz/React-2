import { useAddUserAlbumMutation, useGetUserAlbumQuery } from "../store/apis/albumApi"


export default function UserAlbumList({userID}){
     console.log(userID)

    const {data, error , isLoading ,isSuccess} = useGetUserAlbumQuery(userID)
    const [addAlbum , response] = useAddUserAlbumMutation()

    function handleClickAddAlbums(){
        addAlbum(userID)
    }
    console.log(data);

    return(<div className="min-h-80 flex flex-col mt-4">
        <div className="text-right">
        <button onClick={handleClickAddAlbums} className="bg-orange-400 px-4 py2 rounded-3xl hover:bg-orange-500" >Album+</button>
        </div>

        {
        //    isSuccess && <p>{data.name}</p>
          isSuccess && data.map((item , index) => <p key={index} >{item.name}</p> )
        }
    </div>)
}