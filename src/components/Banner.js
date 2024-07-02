import React from 'react'
import banner from './banner.png'
import '../styles/Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className="banner-img">
            <img src={banner} alt="banner-ecom"/>
        </div>
      
    </div>
  )
}

export default Banner
