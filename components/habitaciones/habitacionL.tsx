'use client'
import { useEffect, useState } from 'react'
import { IHabitacion } from '@/types/ITypes'
import Image from 'next/image'
import Carrucel from '../carrucel/carrucel'

const HabitacionL = ({dataHabitacion}: {dataHabitacion: IHabitacion}) => {

  const [habitacion, setHabitacion] = useState<IHabitacion>()
  const [asar, setAsar] = useState<number>(0)

  useEffect(() => {


    if ( dataHabitacion ){
      setHabitacion(dataHabitacion)
      const totalImagenes = dataHabitacion.imagenes.length
      const randon = Math.floor(Math.random() * totalImagenes)
      setAsar(randon)
    }
  }, [dataHabitacion])
  
  return (
    <div>
      <div className="relative min-h-screen w-full flex items-center">
        {
          habitacion && habitacion.imagenes.length > 0 && (
          <Image 
            src={habitacion.imagenes[asar]}
            alt="fondoHabitacion" 
            fill
            priority 
            className="object-cover -z-10 opacity-35"
          />)
        }
        <div className='flex w-full'>
          <div className='w-[35%] flex flex-col justify-center'>
            <div className='bg-gray-400/90 mx-4 p-8 text-white'>
                <h2>Presio: $<span className='text-2xl'>{`${habitacion?.precio.toLocaleString()}`}</span> pesos</h2>
                <h1 className='my-4 text-2xl'>Habitacion {`${habitacion?.tipo}`}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore expedita, ipsum vitae ullam tenetur animi officiis repellendus itaque, nobis quidem soluta doloremque ab cumque eius hic? Molestias, doloremque fuga.</p>
            </div>
            <div className='bg-gray-400/90 mx-4 p-8 text-white mt-4'>
                <div className='flex gap-8'>
                  <div>
                    <div className='flex items-center gap-4'>
                      <i className="fa-solid fa-users"></i>
                      <p>2 adultos</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <i className="fa-solid fa-bowl-rice"></i>
                      <p>desayuno</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <i className="fa-solid fa-wind"></i>
                      <p>aire acondicionado</p>
                    </div>
                    {
                        habitacion?.jacuzzi && 
                        <div className='flex items-center gap-4'>
                            <i className="fa-solid fa-hot-tub-person "></i>
                            <p>jacuzzi</p>
                        </div>
                    }
                  </div>
                  <div>
                  <div className='flex items-center gap-4'>
                      <i className="fa-solid fa-tv"></i>
                      <p>television</p>
                    </div><div className='flex items-center gap-4'>
                      <i className="fa-solid fa-box-archive"></i>
                      <p>caja fuerte</p>
                    </div><div className='flex items-center gap-4'>
                      <i className="fa-solid fa-shower"></i>
                      <p>agua caliente</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
            <div className='w-[65%] m-auto'>
                <Carrucel slides={habitacion?.imagenes} tipo={habitacion?.tipo}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HabitacionL