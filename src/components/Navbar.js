import React from 'react';
import '../styles/Navbar.css';
import logo from './indotrading-logo-1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faCartShopping} from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
        
        <nav className='navbar'>
            <div className='left'>
                <a href='App.js'><img src={logo} className='logo' alt='logo indotrading'/></a>
            </div>
            <div className="middle">
                <input type="text" className="search" placeholder='Cari barang'/>
                <button onClick={msg} className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
            <div className="right">
                <a href="App.js"><FontAwesomeIcon icon={faCartShopping}/></a>
                <div className='separator'></div>
                <button onClick={msg} className="login-button">LOGIN / DAFTAR</button>
            </div>
        </nav>
    );

};

function msg(){
   return alert('Button Clicked');
};
  
export default Navbar;