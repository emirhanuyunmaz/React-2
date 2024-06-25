import 'primeicons/primeicons.css';

export default function Footer(){
    return(<div className='bg-red-800 py-20 text-white flex flex-col justify-center items-center gap-2'>
        <div className=' flex gap-10'>
            <i className="pi pi-facebook" style={{ fontSize: '3rem' }}></i>
            <i className="pi pi-twitter" style={{ fontSize: '3rem' }}></i>
            <i className="pi pi-instagram" style={{ fontSize: '3rem' }}></i>
        </div>
        <p>Tüm Hakları Saklıdır | Burger Yiyelim</p>
    </div>)
}