import React from 'react'
import './Footer.css'
import {NavLink} from 'react-router-dom'    
import {useState} from 'react'
function Footer() {
  return (
    <footer>
    <div className="footer-overlay"></div>
                <div className="container">
                    <div className="footer-content">
                    <NavLink to='/' className="footer-icon">
            <div className="footer-logo">
            <i className="fa-brands fa-pagelines"></i>
            </div>
            <div className="footer-heading">
              <h3>Həyat Fondu</h3>
            </div>
          </NavLink>
                        <div className="footer-items">
                            <h5>Xəbər Bülleteni</h5>
                            <input type="text" name="" id="" placeholder='Adınızı daxil edin' /> <br />
                            <input type="text" name="" id="" placeholder='Soyadınızı daxil edin' /> <br />                           
                            <input type="text" name="" id="" placeholder='E-poçt ünvanınızı daxil edin' /> <br />
                            <button>Bülletenimizə abunə olun</button>
                        </div>
                        <div className="footer-contact">
                            <div className="contact-us">
                                <h5>BİZİMLƏ ƏLAQƏ</h5>
                                <p>info@həyatfondu.org</p>
                            </div>
                            <div className="locate-us">
                                <h5>BIZI TAPIN</h5>
                                <p>49.2847458, -123.1096354</p>
                            </div>
                            <div className="follow-us">
                                <h5>BİZİ İZLƏYİN</h5>
                                <a href="https://twitter.com/" target='_blank'><i className="fa-brands fa-twitter-square"></i></a>
                                <a href="https://www.instagram.com/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-facebook-square"></i></a>
                            </div>
                        </div>
                        <div className="footer-resource">
                            <div className="resource-items">
                                <h5>Bağlantılar</h5>
                                <a href="/about">Haqqımızda</a>
                                <a href="projects">Sosyal Layihələr</a>
                                <a href="/partners">Tərəfdaşlar</a>
                                <a href="/shop">Mağaza</a>
                                <a href="/contact">Əlaqə</a>
                                <a href="/donate">İanə</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
  )
}

export default Footer