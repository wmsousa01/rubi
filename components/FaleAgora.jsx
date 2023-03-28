import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FaleAgora = ({heading, message}) => {
  return (
    <div id='fale-agora' className="w-full h-screen bg-white">
    <div className= "p-10 mx-auto lg:flex items-stretch justify-evenly">
      <div className='mt-20 lg:self-center'>
          <h2 className='text-4xl sm:text-7xl font-black flex  text-transparent bg-clip-text bg-gradient-to-r from-[#BD0000] to-[#770000]'>{heading}</h2>
          <h2 className='mt-5 text-1xl sm:text-1xl font-light text-left text-transparent bg-clip-text bg-gradient-to-r from-[#BD0000] to-[#770000]'>{message}</h2>
          <div className='mt-5 grid grid-cols-2 gap-4'>
            <button className='p-3'>
              <Link href='https://wa.me/5519996613747'>Fale Agora</Link>
            </button>
          </div>
        </div>
        <div className='mt-10 lg:mt-40 flex lg:justify-end self-center'>
          <Image src='/assets/fale-agora.png' alt='Medica' width={513} height={400}/>
        </div>
      </div>
    </div>
  )
}

export default FaleAgora