'use client'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import Swal from 'sweetalert2'

const Navbar = () => {

  const {user, logout} = useAuth()

  const handleClose = ()=>{
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "Finalizo la sesión",
      text: "Gracias por utilizar nuestros servicios",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    })
    logout()
  }

  return (
    <div className='flex justify-between py-2 px-8 bg-blue-500 text-white'>
      <Link href="/" className='flex gap-2 items-center'>
        <i className="fa-solid fa-hotel"></i>
        <span>Eiris Hotel</span>
      </Link>
      <div>
        <ul className='flex gap-8'>
          <li><Link href="/">Home</Link></li>
          <li>Habitaciones</li>
          <li>Huespedes</li>
        </ul>
      </div>
      <div>
        {
          !user ? (<Link href="inicioSesion">Iniciar Sesion</Link>):(<Link href="/" onClick={handleClose}>Cerrar Sesion</Link>)
        }
      </div>
    </div>
  )
}

export default Navbar