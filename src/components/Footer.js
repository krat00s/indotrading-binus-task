import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import lkpp from '../images/lkpp.png'
import bela from '../images/bela.png'
import google from '../images/google-play-badge.png'
import indopay from '../images/indopay.png'




function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className="top">
            <div className="col">
                <h1>B2B MARKETPLACE INDONESIA</h1>
                <div className="content-footer">
                    <p>IndoTrading.com adalah B2B Marketplace dan Direktori Bisnis Supplier Terbesar di Indonesia.</p>
                    <p>Situs Jual Beli khusus B2B Marketplace, B2B E-commerce, B2B, Pusat Distributor, Pabrik, Trading, Supplier, Agen, Grosir, Importir, Exportir dan Penyedia Jasa terlengkap di Indonesia.</p>
                    <p>Segera Daftarkan perusahaan anda dan dapatkan akses ke informasi projek, tender dan dapatkan website gratis untuk perusahaan anda berjualan di Internet.</p>
                </div>
            </div>
            <div className="col">
                <h1>INFORMASI</h1>
                <div className="content-footer">
                    <ul>
                        <li><a href="App.js">Hubungi Kami</a></li>
                        <li><a href="App.js">Indotrading FAQ</a></li>
                        <li><a href="App.js">Testimonial</a></li>
                        <li><a href="App.js">Karir</a></li>
                        <li><a href="App.js">Partners</a></li>
                        <li><a href="App.js">Event Indotrading</a></li>
                        <li><a href="App.js">Terms & Condition</a></li>
                        <li><a href="App.js">Privacy Policy</a></li>
                    </ul>
                </div>
                
            </div>
            <div className="col">
                <h1>BELI</h1>
        
                    <ul>
                        <li><a href="App.js">Produk Terbaru</a></li>
                        <li><a href="App.js">Cara Belanja</a></li>
                        <li><a href="App.js">Daftar Pembeli</a></li>
                    </ul>
                <h1>JUAL</h1>
                    <ul>
                        <li><a href="App.js">Perusahaan Terbaru</a></li>
                        <li><a href="App.js">Cari Proyek</a></li>
                        <li><a href="App.js">Daftar Jadi Supplier</a></li>
                    </ul>
                

            </div>
            <div className="col">
                <h1>OUR SERVICE</h1>
                <ul>
                    <li><a href="App.js">Premium Supplier</a></li>
                    <li><a href="App.js">Premium Buyer</a></li>
                    <li><a href="App.js">Jasa SEO</a></li>
                    <li><a href="App.js">Google Ads</a></li>
                    <li><a href="App.js">Youtube Ads</a></li>
                    <li><a href="App.js">Social Media Ads</a></li>
                    <li><a href="App.js">Google Display Network</a></li>
                    <li><a href="App.js">Email Bisnis</a></li>
                    <li><a href="App.js">Buat Website</a></li>
                    <li><a href="App.js">Toko Daring</a></li>
                </ul>
                <ul>
                    <li className='btn-lang-vert'>
                        <span className='btn-active'>INDONESIA</span>
                        <a href="App.js" className='btn-lang'>ENGLISH</a>
                    </li>
                </ul>

            </div>
            <div className="col">
                <h1>FOLLOW US</h1>
                <ul className='socmed-icons'>
                    <li><a href="twitter.com" aria-label='twitter'><FontAwesomeIcon icon={faTwitter}/></a></li>
                    <li><a href="facebook.com" aria-label='facebook'><FontAwesomeIcon icon={faFacebook}/></a></li>
                    <li><a href="youtube.com" aria-label='youtube'><FontAwesomeIcon icon={faYoutube}/></a></li>
                    <li><a href="instagram.com" aria-label='instagram'><FontAwesomeIcon icon={faInstagram}/></a></li>
                </ul>
                <h1>DOWNLOAD OUR APPS</h1>
                <ul>
                    <li>
                        <a href="https://play.google.com/store/apps/details?id=org.cordova.quasaridt.app" target='_blank' rel='noopener noreferrer' className='partner-logo'>
                            <img src={google} alt="google play"/>
                        </a>
                    </li>
                </ul>
                <h1>OFFICIAL PARTNER OF</h1>
                <ul>
                    <li>
                        <a href="https://tokodaring.indotrading.com/" target='_blank' rel='noopener noreferrer' className='partner-logo'>
                            <img src={lkpp} alt="lkpp" />
                        </a>
                    </li>
                    <li>
                        <a href="https://en.indotrading.com/belapengadaan.aspx" target='_blank' rel='noopener noreferrer' className='partner-logo'>
                            <img src={bela} alt="lkpp" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bottom">
            <div className="container-bottom">

                <div className='row'>
                    <div className='locations'>
                        <ul>
                            <li><a href="App.js">Indonesia</a></li>
                            <li><a href="App.js">Jakarta</a></li>
                            <li><a href="App.js">Bali</a></li>
                            <li><a href="App.js">Bandung</a></li>
                            <li><a href="App.js">Semarang</a></li>
                            <li><a href="App.js">Surabaya</a></li>
                            <li><a href="App.js">Pontianak</a></li>
                            <li><a href="App.js">Samarinda</a></li>
                            <li><a href="App.js">Makassar</a></li>
                            <li><a href="App.js">Manado</a></li>
                            <li><a href="App.js">Palembang</a></li>
                            <li><a href="App.js">Medan</a></li>
                            <li><a href="App.js">Yogyakarta</a></li>
                        </ul>
                    </div>
                </div>

                <div className='row'>
                    <span>Bayar dengan</span>
                    <img src={indopay} alt="indopay"/>
                    <span>untuk transaksi aman & nyaman <a href='https://www.indotrading.com/indotradingpay.aspx' target='_blank' rel='noreferrer'>Pelajari lebih lanjut</a> </span>
                </div>

                <div className='row'>
                    <div className='trademark'>
                        <p>
                            ©
                            <span> 2024</span>
                            &nbsp;
                            <a href="indo">Indotrading - Indonesia B2B Marketplace Direktori Bisnis Indonesia </a>
                            All Rights Reserved.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
  )
}

export default Footer
