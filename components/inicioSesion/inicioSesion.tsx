'use client'
import { useState } from "react"
import { Input, Button } from "../ui/htmlElement"
import Link from "next/link"
import { ILoginProps } from "@/types/ITypes"
import { Login } from "@/helpers/auth.helpers"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

const InicioSesion = () => {

  const router = useRouter()

  const inicialStade ={
    email : "",
    password : "",
    token:""
  }

  const [dataUser, setDataUser] = useState<ILoginProps>(inicialStade)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setDataUser({
      ...dataUser,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const response = await Login(dataUser)

    if (response.success) {
      localStorage.setItem('userSesion', JSON.stringify(response.data));
      Swal.fire({
        icon: "success",
        title: "Inicio exitoso",
        text: `Bienvenido ${dataUser.email}`
      })
      router.push("/")
  } else {
    Swal.fire({
      icon:"error",
      title: "Error al inicio de sesión",
      text: "Correo o contraseña incorrecta"
    })
  }
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center bg-blue-500 w-1/2 py-8 rounded-tl-2xl rounded-br-2xl'>
            <div>
                <span className='text-2xl text-white '>Eiris Hotel</span>
            </div>
            <form className='mt-4 flex flex-col gap-8 w-[60%]' onSubmit={handleSubmit}>
                <Input type="email" placeholder='Correo' name="email" value={dataUser.email} onChange={handleChange} required/>
                <Input type="password" placeholder='Contraseña' name="password" value={dataUser.password} onChange={handleChange} required/>
                <Button className='bg-white text-blue-500' type="submit">Ingresar</Button>
                <Link href="/" className="text-white text-sm">Olvide la contraseña</Link>
            </form>
        </div>
    </div>
  )
}

export default InicioSesion