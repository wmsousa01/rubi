import Image from 'next/image';
import React from 'react';
import Products from './Products';
import PrImg1 from '../public/assets/pr-img-1.png'
import ProductsImg from './ProductsImg';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Nossos Produtos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
          <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <ProductsImg productsImg={PrImg1}
          
          alt='/'
          width='677'
          height='451'
          layout='responsive'
          objectFit='cover'
          />
          </div>
          <div>
          <ProductsImg productsImg={PrImg1}
          
          alt='/'
          width='677'
          height='451'
          layout='responsive'
          objectFit='cover'
          />
          </div>
          <div>
          <ProductsImg productsImg={PrImg1}
          
          alt='/'
          width='677'
          height='451'
          layout='responsive'
          objectFit='cover'
          />
          </div>
          <div>
          <ProductsImg productsImg={PrImg1}
          
          alt='/'
          width='677'
          height='451'
          layout='responsive'
          objectFit='cover'
          />
          </div>
          <div>
          <ProductsImg productsImg={PrImg1}
          
          alt='/'
          width='677'
          height='451'
          layout='responsive'
          objectFit='cover'
          />
          </div>
        </div>
      </div>
  );
};

export default Portfolio;