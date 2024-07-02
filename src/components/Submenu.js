import React from 'react'
import '../styles/Category.css'

function Submenu({title, items}) {
  return (
    <div className='submenu'>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
            <li key={index}>
                <a href='App.js'>{item}</a>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Submenu
