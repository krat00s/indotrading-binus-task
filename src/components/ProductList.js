import React from 'react'
import '../styles/ProductList.css'
import phoneImage from './smartphone.png'
import ipadImage from './ipad.png'

const products = [{
    category: 'SMARTPHONE',
    items: [
            {
                Image: phoneImage,
                title: 'iPhone 15 Pro Max 1TB',
                price: 'Rp. 30.000.000',
                seller: 'iBox',
                location: 'Jakarta'
            },
            {
                Image: phoneImage,
                title: 'iPhone 14 Pro Max 1TB',
                price: 'Rp. 25.000.000',
                seller: 'iBox',
                location: 'Jakarta'
            },
            {
                Image: phoneImage,
                title: 'iPhone 13 Pro Max 512GB',
                price: 'Rp. 16.000.000',
                seller: 'iBox',
                location: 'Jakarta'
            },
            {
                Image: phoneImage,
                title: 'iPhone 11 Pro Max 512GB',
                price: 'Rp. 12.000.000',
                seller: 'iBox',
                location: 'Jakarta'
            }
        ]
    }, {
        category: 'TABLET',
        items: [
            {
                Image: ipadImage,
                title: 'iPad Pro 1TB',
                price: 'Rp. 18.000.000',
                seller: 'iBox',
                location: 'Jakarta'
            },
            {
                Image: ipadImage,
                title: 'iPad Air 256GB',
                price: 'Rp. 14.000.000',
                seller: 'iBox',
                location: 'Jakarta'
            },
            {
                Image: ipadImage,
                title: 'iPad M4 1TB',
                price: 'Rp. 25.000.000',
                seller: 'iBox',
                location: 'Jakarta'
            },
        ]
    }
];


function ProductList() {
  return (
    <div className='product-list'>

      {products.map((productCategory, index) => (
        <div key={index} className='product-category'>
            <h2>{productCategory.category}</h2>
            <div className="product-items">
                {productCategory.items.map((product, idx) => (
                    <a href='App.js' className='product-item' key={idx}> 
                        <img src={product.Image} alt={product.title} />
                        <div className="product-details">
                            <p className='product-title'>{product.title}</p>
                            <p className="product-price">{product.price}</p>
                            <p className='product-seller'>{product.seller}</p>
                            <p className='product-location'>{product.location}</p>
                        </div>
                    
                    </a>
                    
                ))    
                }
            </div>
        </div>
      ))}

    </div>
  )
}

export default ProductList
