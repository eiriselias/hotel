'use client'
import HabitacionL from '@/components/habitaciones/habitacionL'
import HabitacionR from '@/components/habitaciones/habitacionR'
import { getHabitaciones } from '@/helpers/habitaciones.helpers'
import { IHabitacion } from '@/types/ITypes'
import { useEffect, useState } from 'react'

const pageHabitaciones = () => {

  const [habitaciones, setHabitaciones] = useState<IHabitacion[]>([])
  const [junior, setJunior] = useState<IHabitacion>()
  const [presidencial, setPresidencial] = useState<IHabitacion>()

  useEffect(() => {
    getHabitaciones().then((dataHabitaciones) => {
      setHabitaciones(dataHabitaciones)
      const dataJunior = dataHabitaciones.find((hab:IHabitacion)=>hab.tipo === "Junior")
      setJunior(dataJunior)
      const dataPresidencial = dataHabitaciones.find((hab:IHabitacion)=>hab.tipo === "Presidencial")
      setPresidencial(dataPresidencial)
    })
  }, [])
  
  return (
    <>
      {junior && <HabitacionR dataHabitacion={junior}/>}
      {presidencial && <HabitacionL dataHabitacion={presidencial}/>}
    </>
  )
}

export default pageHabitaciones