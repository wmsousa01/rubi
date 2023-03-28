import Image from 'next/image'
import React from 'react'
import { FaFileMedical, FaInstagram } from 'react-icons/fa'
import Zoom from 'react-medium-image-zoom'

const ProductsImg = ({ productsImg }) => {
  return (
    <div className='relative'>
      <Zoom>
        <Image src={productsImg} alt='/' className='w-full h-full' layout='responsive' />
      </Zoom>
      {/* Overlay */}
      <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
        <p className='text-gray-300 hidden group-hover:block'><FaFileMedical size={30} />
        </p>
      </div>
    </div>
  )
}

export default ProductsImg
