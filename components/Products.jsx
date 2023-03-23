import React from 'react'
import PrImg1 from '../public/assets/pr-img-1.png'
import PrImg2 from '../public/assets/pr-img-2.png'
import PrImg3 from '../public/assets/pr-img-3.png'
import PrImg4 from '../public/assets/pr-img-4.png'
import PrImg5 from '../public/assets/pr-img-5.png'
import ProductsImg from './ProductsImg'

const Products = () => {
  return (
        <div>
            <ProductsImg productsImg={PrImg1} />
            <ProductsImg productsImg={PrImg2} />
            <ProductsImg productsImg={PrImg3} />
            <ProductsImg productsImg={PrImg4} />
            <ProductsImg productsImg={PrImg5} />
        </div>

  )
}

export default Products