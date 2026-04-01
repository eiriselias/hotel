import Image from 'next/image'

const Comidas = () => {
  return (
    <div className="relative min-h-screen w-full">
        <Image 
            src="/bandejapaisa.jpg" 
            alt="fondoComidas" 
            fill
            priority 
            className="object-cover -z-10 opacity-35"
        />
        <div className="relative z-10 p-8">
            <h1 className=" text-3xl font-bold">Nuestras Comidas</h1>
        </div>
    </div>
  )
}

export default Comidas