import UserList from './components/UserList'
import { useAddUserAlbumMutation, useGetUserAlbumQuery } from './store/apis/albumApi'
import { useAddUserPhotosMutation, useGetUserPhotosQuery } from './store/apis/photosApi'
import { useAddUserNameMutation, useGetUsersNameQuery } from './store/apis/usersApi'


function App() {
  
  //const {data , error , isLoading} = useGetUsersNameQuery()
  // console.log(data)
  // const {data , error , isLoading} = useGetUserAlbumQuery()
  // console.log(data);
  // const {data , error , isLoading} = useGetUserPhotosQuery()
  // console.log(data);
  const [addUser, result] = useAddUserNameMutation()

  // const [addAlbum , resultAlbum] = useAddUserAlbumMutation()

  // const [addPhoto , resultPhotos] = useAddUserPhotosMutation()

  function handleClickAddUser(){
    addUser()
  }

  // function handleAlbumClick(){
  //   addAlbum()
  // }
  // function handleClickPhoto(){
  //   addPhoto()
  // }

  return (
    <div className='p-5'>
    {/* <h1 className='bg-black text-white' >Hello World</h1>
    <button onClick={handleClick} >User</button>
    <button onClick={handleAlbumClick} >Album</button>
    <button onClick={handleClickPhoto} >Photos</button> */}
    <div className='py-10'>
    <button onClick={handleClickAddUser} className='bg-blue-300 px-4 py-1 rounded-2xl hover:bg-blue-400 duration-500' >Add User</button>
    </div>

    <UserList/>
    </div>
  )
}

export default App
