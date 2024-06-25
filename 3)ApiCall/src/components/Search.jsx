import axios from 'axios'

export default function Serach({searchs , setImagesList}){
    const serachURL = `https://api.unsplash.com/search/photos/?client_id=IlqN-jJo780KeywJbHyq4YQPxIlSvgehFu-WetBaweA&query=car`

    async function handleSubmit(e) {
        e.preventDefault()
        const getPhoto = await axios.get(`https://api.unsplash.com/search/photos/?client_id=IlqN-jJo780KeywJbHyq4YQPxIlSvgehFu-WetBaweA&query=${searchs.searchText}`)
        setImagesList(getPhoto.data.results)
        //console.log(getPhoto.data.results)
    }

    return (<>
        <h1>Search</h1>
        <form onSubmit={handleSubmit}> 
            <input type="text" className="bg-slate-400" value={searchs.searchText} onChange={(e) => {searchs.setSearchText(e.target.value)} } />
        </form>
    </>)
}