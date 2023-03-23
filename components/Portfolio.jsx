import Image from 'next/image';
import React from 'react';
import Products from './Products';
import PrImg1 from '../public/assets/pr-img-1.png'
import PrImg2 from '../public/assets/pr-img-2.png'
import PrImg3 from '../public/assets/pr-img-3.png'
import PrImg4 from '../public/assets/pr-img-4.png'
import PrImg5 from '../public/assets/pr-img-5.png'
import PrImg6 from '../public/assets/pr-img-6.png'
import PrImg7 from '../public/assets/pr-img-7.png'
import PrImg8 from '../public/assets/pr-img-8.png'
import ProductsImg from './ProductsImg';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 id='nossos-produtos' className='font-bold text-2xl p-4'>Nossos Produtos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <ProductsImg productsImg={PrImg3}

            alt='/'
            width='677'
            height='451'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div>
          <ProductsImg productsImg={PrImg2}

            alt='/'
            width='677'
            height='451'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div>
          <ProductsImg productsImg={PrImg5}

            alt='/'
            width='677'
            height='451'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div>
          <ProductsImg productsImg={PrImg4}

            alt='/'
            width='677'
            height='451'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div>
          <ProductsImg productsImg={PrImg6}

            alt='/'
            width='677'
            height='451'
            layout='responsive'
            objectFit='cover'
          />
          <ProductsImg productsImg={PrImg7}

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