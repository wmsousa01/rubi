import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='relative h-32 w-32 top-0 left-0 right-0 bottom-0 bg-white/15 z-[2]' />
        <div className='absolute insert-y-32 left-0 w-70 p-5 text-red-600 z-[2]'>
            <p className='py-5 text-xl'>{heading}</p>
            <h2 className='py-5 text-5xl font-bold'>{message}</h2>
            <button className='px-8 py-2 border'>WhatsApp</button>
        </div>
    </div>
  )
}

export default Hero