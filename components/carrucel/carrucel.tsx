'use client'
import { useState } from 'react'

const Carrucel = ({slides, tipo}:{slides: string[] | undefined, tipo?: string},) => {

  if(!slides) return null

  const [recorrido, setRecorrido] = useState<number>(1)

  const previousSlide = ()=>{
    if(recorrido===0) setRecorrido(slides.length - 1);
      else setRecorrido(recorrido - 1);
  }

  const nextSlide = ()=>{
    if(recorrido === slides.length - 1) setRecorrido(0);
    else setRecorrido(recorrido + 1)
  }

  return (
    <div className='overflow-hidden relative'>
      <div className='flex transition ease-in-out duration-500'
        style={{
          transform: `translateX(-${recorrido * 100}%)`
        }}
      >
        {
          slides.map((s, i)=>{
            return <img 
              key={`Slide${i}`}
              src={s}
              className="w-full shrink-0 object-cover" 
              alt={`Slide ${i}`}
              />
          })
        }
      </div>
      <div className='absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl'>
        <button onClick={previousSlide}>
          <i className="fa-solid fa-circle-arrow-left cursor-pointer"></i>
        </button>
        <button onClick={nextSlide}>
          <i className="fa-solid fa-circle-arrow-right cursor-pointer"></i>
        </button>
      </div>
      <div className='absolute top-0 py-8 flex justify-center gap-3 w-full text-white text-3xl'>
          { tipo && <h1>{`Habitacion ${tipo}`}</h1> }
      </div>
      <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
        {
          slides.map((s, i)=>{
            return (
              <div 
              onClick={()=>{ setRecorrido(i)}}
              key={`circle ${i}`}
              className={`rounded-full w-5 h-5 cursor-pointer ${i === recorrido ? "bg-white":"bg-gray-500"} `}
              >
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Carrucel