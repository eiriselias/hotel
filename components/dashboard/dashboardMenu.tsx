'use client'
import { useAuth } from '@/context/AuthContext'

const DashboardMenu = () => {
    const { user } = useAuth()
    const listStile = "hover:bg-blue-500 hover:text-white hover:w-full pl-4 hover:rounded-r-2xl cursor-pointer transition-colors"
  return (
    <div>
        <div className='flex flex-col items-center mt-4 mb-8'>
            <img src="MiHotel.png" alt='logoMiHotel' width={200}/>
            <h1>{user?.name.toLocaleUpperCase()}</h1>
            <p>Bienvenido a Mi Hotel</p>
            <hr className='w-[80%] border-t border-gray-300 my-2'/>
        </div>
        <ul className="flex flex-col w-full px-4 gap-y-6">
            {/* Sección Huésped */}
            <li className="flex flex-col items-center">
                <span className="font-bold text-gray-700 uppercase text-xs tracking-wider">Huesped</span>
                <hr className="w-[80%] border-t border-gray-300 my-2" />
                
                <ul className="flex flex-col gap-y-1 w-full text-sm text-gray-600">
                    <div className={`${listStile} flex gap-4 p-2 items-center`}>
                        <i className="fa-solid fa-user-plus"></i>
                        <li>Nuevo huésped</li>
                    </div>
                    <div className={`${listStile} flex gap-4 p-2 items-center`}>
                        <i className="fa-solid fa-user-pen"></i>
                        <li>Editar huésped</li>
                    </div>
                    <div className={`${listStile} flex gap-4 p-2 items-center`}>
                        <i className="fa-solid fa-user-xmark"></i>
                        <li>Eliminar huésped</li>
                    </div>
                </ul>
            </li>

            {/* Sección Habitación */}
            <li className="flex flex-col items-center">
                <span className="font-bold text-gray-700 uppercase text-xs tracking-wider">Habitación</span>
                <hr className="w-[80%] border-t border-gray-300 my-2" />
                
                <ul className="flex flex-col  gap-y-1 w-full text-sm text-gray-600">
                    <div className={`${listStile} flex gap-4 p-2 items-center`}>
                        <i className="fa-solid fa-house-circle-check"></i>
                        <li>Nueva habitación</li>
                    </div>
                    <div className={`${listStile} flex gap-4 p-2 items-center`}>
                        <i className="fa-solid fa-house-circle-exclamation"></i>
                        <li>Editar habitación</li>
                    </div>
                    <div className={`${listStile} flex gap-4 p-2 items-center`}>
                        <i className="fa-solid fa-house-circle-xmark"></i>
                        <li>Eliminar habitación</li>
                    </div>
                    <div className={`${listStile} flex gap-4 p-2 items-center`}>
                        <i className="fa-solid fa-house-chimney-user"></i>
                        <li>Reservar habitación</li>
                    </div>
                </ul>
            </li>

            {/* Sección Productos */}
            <li className="flex flex-col items-center">
                <span className="font-bold text-gray-700 uppercase text-xs tracking-wider">Productos</span>
                <hr className="w-[80%] border-t border-gray-300 my-2" />
                
                <ul className="flex flex-col gap-y-1 w-full text-sm text-gray-600">
                    <div className={`${listStile} flex gap-4 p-2 items-center`}>
                        <i className="fa-solid fa-cart-plus"></i>
                        <li>Crear producto</li>
                    </div>
                    <div className={`${listStile} flex gap-4 p-2 items-center`}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <li>Editar producto</li>
                    </div>
                    <div className={`${listStile} flex gap-4 p-2 items-center`}>
                        <i className="fa-solid fa-cart-flatbed"></i>
                        <li>Eliminar producto</li>
                    </div>
                    <div className={`${listStile} flex gap-4 p-2 items-center`}>
                        <i className="fa-solid fa-cart-arrow-down"></i>
                        <li>Solicitar productos</li>
                    </div>
                </ul>
            </li>
        </ul>

    </div>
  )
}

export default DashboardMenu