'use client'
import { useState } from 'react'
import { Button, Input } from './ui/htmlElement'
import { IHuesped } from '@/types/ITypes'
import { crearHuesped } from '@/helpers/huesped.helpers'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const HuespedNew = () => {

    const router = useRouter()
    const inicialState = {
        numeroDocumento: 0,
        nombres: "",
        apellidos:"",
        fechaNacimiento:""
    }
    const [data, setData] = useState<IHuesped>(inicialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
       
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        
        const dataEnviar = {
            ...data,
            numeroDocumento: Number(data.numeroDocumento),
            fechaNacimiento: new Date(data.fechaNacimiento).toISOString()
        }

        const res = await crearHuesped(dataEnviar) 

        if(res.success){
            Swal.fire({
                icon: 'success',
                title:'Huesped Registrado',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            })
            router.push("/huespedes")
        }else{
            Swal.fire({
                icon: 'error',
                title:'Error al registar el huesped',
                text: 'Hubo un error al tratar de registrar el huesped',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            })
        }
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <h2>Crear Nuevo Huesped</h2>
        <Input type='number' name='numeroDocumento' value={data.numeroDocumento} onChange={handleChange} placeholder='Numero de documento' required/>
        <Input type='text' name='nombres' value={data.nombres} onChange={handleChange} placeholder='Nombres' required/>
        <Input type='text' name='apellidos' value={data.apellidos} onChange={handleChange} placeholder='Apellidos' required/>
        <div className='flex w-full'>
            <span>Fecha de Nacimiento</span>
            <Input type='date' name='fechaNacimiento' value={data.fechaNacimiento} onChange={handleChange} placeholder='Fecha de nacimiento' required/>
        </div>
        <Button className='bg-blue-500 text-white w-[50%]'>Crear</Button>
    </form>
  )
}

export default HuespedNew