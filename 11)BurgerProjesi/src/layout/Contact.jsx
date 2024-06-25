import Banner from '../assets/banner.png'


export default function Contact(){
    return(<div className='grid grid-cols-2 mt-3'>
        <img src={Banner} alt="" />
        <div className=''>
            <form className='grid grid-rows-10  p-12 gap-2 '>
                <label htmlFor="">Name Surname</label>
                <input type="text" placeholder='Name Surname' className='border-b-2 focus:outline-none' />

                <label htmlFor="">Email</label>
                <input type="text" placeholder='Email' className='border-b-2 focus:outline-none' />

                <label htmlFor="">Message</label>
                <textarea cols={10} type="text" placeholder='Message' className='border-b-2 row-span-5 focus:outline-none' />
                <button className='bg-red-800 py-2 px-8 text-white hover:bg-red-900 duration-500 rounded-xl grid-rows-1  me-auto'>Gönder</button>

            </form>
        </div>
    </div>)
}