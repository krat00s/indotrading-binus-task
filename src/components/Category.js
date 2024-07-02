import React from 'react'
import '../styles/Category.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import SubMenu from './Submenu';

function Category() {
  return (
    <div className='category-wrapper'>
        <div className='category'>
            <h2>Category</h2>
        </div>
        <div className='list-category'>
            <ul>
                <li><a href="App.js">Alat Berat <span><FontAwesomeIcon icon={faArrowRight}/></span></a></li>
                <li><a href="App.js">Alat Elektronik <span><FontAwesomeIcon icon={faArrowRight}/></span></a></li>
                <li><a href="App.js">Alat Industri <span><FontAwesomeIcon icon={faArrowRight}/></span></a></li>
                <li><a href="App.js">Alat Mekanik dan Suku Cadang <span><FontAwesomeIcon icon={faArrowRight}/></span></a></li>
                <li><a href="App.js">Alat Pelindung Diri <span><FontAwesomeIcon icon={faArrowRight}/></span></a></li>
                <li><a href="App.js">Alat Ukur dan Survey <span><FontAwesomeIcon icon={faArrowRight}/></span></a></li>
                <li><a href="App.js">Bahan Kimia <span><FontAwesomeIcon icon={faArrowRight}/></span></a></li>
                <li><a href="App.js">Karet dan Plastik <span><FontAwesomeIcon icon={faArrowRight}/></span></a></li>
                <li><a href="App.js">Konstruksi dan Properti <span><FontAwesomeIcon icon={faArrowRight}/></span></a></li>
                <li><a href="App.js">Mesin <span><FontAwesomeIcon icon={faArrowRight}/></span></a></li>
                <div className='footer-list'>
                    <li><a href="App.js">Semua Category <span><FontAwesomeIcon icon={faArrowRight}/></span></a></li>
                </div>
            </ul>
            <SubMenu
                title = 'Sub Category'
                items={[
                    'Items 1',
                    'Items 2',
                    'Items 3',
                    'Items 4',
                    'Items 5',
                    'Items 6'
                ]}
            />
        </div>
    </div>
  )
}

export default Category
