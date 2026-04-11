'use client'
import { useEffect, useState } from 'react'
import { IHabitacion } from '@/types/ITypes'
import Image from 'next/image'
import Carrucel from '../carrucel/carrucel'

const HabitacionJunior = ({dataHabitaciones}: {dataHabitaciones: IHabitacion[]}) => {

  const [junior, setJunior] = useState<IHabitacion>()
  const [asar, setAsar] = useState<number>(0)

  useEffect(() => {

    const data = dataHabitaciones.find((hab)=>hab.tipo === "Junior")

    if ( data ){
      setJunior(data)
      const totalImagenes = data.imagenes.length
      const randon = Math.floor(Math.random() * totalImagenes)
      setAsar(randon)
    }
  }, [dataHabitaciones])
  
  return (
    <div>
      <div className="relative min-h-screen w-full">
        {
          junior && 
          <Image 
            src={junior.imagenes[asar]}
            alt="fondoHabitacion" 
            fill
            priority 
            className="object-cover -z-10 opacity-35"
          />
        }
        <div className='flex w-full'>
          <div className='w-[65%] m-auto'>
            <Carrucel slides={junior?.imagenes} tipo="Junior"/>
          </div>
          <div className='w-[35%]'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HabitacionJunior