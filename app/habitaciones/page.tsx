'use client'
import HabtacionJunior from '@/components/habitaciones/junior'
import { getHabitaciones } from '@/helpers/habitaciones.helpers'
import { IHabitacion } from '@/types/ITypes'
import { useEffect, useState } from 'react'

const pageHabitaciones = () => {

  const [habitaciones, setHabitaciones] = useState<IHabitacion[]>([])
  const [junior, setJunior] = useState<IHabitacion[]>([])

  useEffect(() => {
    getHabitaciones().then((dataHabitaciones) => {
      setHabitaciones(dataHabitaciones)
      setJunior(dataHabitaciones.filter((habitacion:IHabitacion) => habitacion.tipo === 'Junior'))
    })
  }, [])
  
  return (
    <>
      <HabtacionJunior dataHabitaciones={junior}/>
    </>
  )
}

export default pageHabitaciones