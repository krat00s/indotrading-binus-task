import React from 'react'
import '../styles/Homepage.css'
import Header from './Header'
import ProductList from './ProductList'
import Footer from './Footer'

function Homepage() {
  return (
   <div className="homepage">
        <div className="homepage">
            <Header/>
        </div>
        <div className='product-list'>
            <ProductList/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
   </div>

  )
}

export default Homepage
