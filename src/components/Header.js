import React from 'react'
import Navbar from './Navbar'
import Category from './Category'
import Banner from './Banner'
import '../styles/Header.css' 

function Header() {
  return (
    <div className='header'>
        <div className='top-header'>
            <Navbar/>   
        </div>
        <div className='mid-header'>
            <Category/>
            <Banner/>
        </div>
    </div>
  )
}

export default Header
