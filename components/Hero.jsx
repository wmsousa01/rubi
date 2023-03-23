import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = ({heading, message}) => {
  return (
    <div id='\' className="w-full h-screen bg-white">
    <div className= "p-5 mx-auto lg:flex items-stretch justify-evenly">
      <div className='mt-20 lg:self-center'>
          <h2 className='text-5xl sm:text-7xl font-black flex  text-transparent bg-clip-text bg-gradient-to-r from-[#BD0000] to-[#770000]'>{heading}</h2>
          <h2 className='mt-2 text-2xl sm:text-2xl font-black text-left text-transparent bg-clip-text bg-gradient-to-r from-[#BD0000] to-[#770000]'>{message}</h2>
          <div className='mt-5 grid grid-cols-2 gap-4'>
            <button className='p-3'>
              <Link href='https://wa.me/5519996613747'>Fale Agora</Link>
            </button>
            <button className='p-3'>
              <Link href='https://goo.gl/maps/buhLBVJD2zWsmE7v9'>Como chegar</Link>
            </button>
          </div>
        </div>
        <div className='mt-10 lg:mt-40 flex lg:justify-end self-center'>
          <Image src='/assets/background.png' alt='Representante' width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default Hero