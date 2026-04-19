import React from 'react'
import { Button, Input } from '../ui/htmlElement'

const Habitacion = () => {
  return (
    <form className="flex flex-col gap-4">
      <h2>Nueva Habitacion</h2>
      <Input placeholder="Numero de habitacion"/>
      <Input placeholder="Capacidad"/>
      <Button>Agregar</Button>
    </form>
  )
}

export default Habitacion