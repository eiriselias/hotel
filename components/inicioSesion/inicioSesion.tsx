import { Input, Button } from "../ui/htmlElement"
import Link from "next/link"

const InicioSesion = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center bg-blue-500 w-1/2 py-8 rounded-tl-2xl rounded-br-2xl'>
            <div>
                <span className='text-2xl text-white '>Eiris Hotel</span>
            </div>
            <div className='mt-4 flex flex-col gap-8 w-[60%]'>
                <Input type="text" placeholder='Usuario' />
                <Input type="password" placeholder='Contraseña' />
                <Button className='bg-white text-blue-500'>Ingresar</Button>
                <Link href="/" className="text-white text-sm">Olvide la contraseña</Link>
            </div>
        </div>
    </div>
  )
}

export default InicioSesion