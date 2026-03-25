
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between py-2 px-8 bg-blue-500 text-white'>
      <Link href="/" className='flex gap-2 items-center'>
        <i className="fa-solid fa-hotel"></i>
        <span>Eiris Hotel</span>
      </Link>
      <div>
        <ul className='flex gap-8'>
          <li>Home</li>
          <li>Habitaciones</li>
          <li>Huespedes</li>
        </ul>
      </div>
      <div>
        <span>Iniciar Sesion</span>
      </div>
    </div>
  )
}

export default Navbar