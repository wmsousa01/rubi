import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import MainSlider from './MainSlider';
import SlImgSm1 from '../public/assets/sl-img-1.jpg'
import SlImgSm2 from '../public/assets/sl-img-2.jpg'
import SlImgSm3 from '../public/assets/sl-img-3.jpg'
import SlImg1 from '../public/assets/sl-img-1.jpg'
import SlImg2 from '../public/assets/sl-img-2.jpg'
import SlImg3 from '../public/assets/sl-img-3.jpg'

const ControlledCarousel = () => {
  return (
    <div>
      <div className='md:hidden'>
        <div className='pt-10'>
              <Carousel
                autoPlay
                infiniteLoop={true}
                showThumbs={false}
              >
                <MainSlider sliderImg={SlImgSm1} />  
                <MainSlider sliderImg={SlImgSm2} />  
                <MainSlider sliderImg={SlImgSm3} />  
              </Carousel>  
          </div>
        
      </div>
      <div className='hidden md:block sm:block'>
        <div className='pt-10'>
              <Carousel
                autoPlay
                infiniteLoop={true}
                showThumbs={false}
                width={500}
              >
                <MainSlider sliderImg={SlImg1} />
                <MainSlider sliderImg={SlImg2} />
                <MainSlider sliderImg={SlImg3} />
              </Carousel>   
          </div>  
      </div>
              
  </div>
  )
}

export default ControlledCarousel