import React from 'react'
import IgImg1 from '../public/assets/ig-img-1.jpg'
import IgImg2 from '../public/assets/ig-img-2.jpg'
import IgImg3 from '../public/assets/ig-img-3.jpg'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <div>
        <p>Siga a Rubi nas Redes Sociais</p>
        <p>@Rubi</p>
        <div>
            <InstagramImg socialImg={IgImg1} />
        </div>

    </div>
  )
}

export default Instagram