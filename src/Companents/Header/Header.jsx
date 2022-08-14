import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'
import {useEffect,useState} from 'react'
import Search from '../../pages/Search';
import CommonDonate from '../../pages/CommonDonate';
function Header() {
  const {pathname} = useLocation();
  const [modalSearch,setmodalSearch] = useState(false);
  const [modalDonate,setmodalDonate] = useState(false);
useEffect(()=>{
  window.scrollTo(0,0);
},[pathname])
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <NavLink to='/' className="header-icon">
            <div className="header-logo">
            <i className="fa-brands fa-pagelines"></i>
            </div>
            <div className="header-heading">
              <h3>Həyat Fondu</h3>
            </div>
          </NavLink>
          <div className="header-menu">
            <ul>
              <NavLink className='li' to='/about'>Haqqımızda</NavLink>
              <NavLink className='li' to='/projects'>Sosyal Layihələr</NavLink>
              <NavLink className='li' to='/partners'>Tərəfdaşlar</NavLink>
              <NavLink className='li' to='/donate'>İanə</NavLink>
              <NavLink className='li' to='/contact'>Əlaqə</NavLink>
              <li onClick={()=>setmodalDonate(true)} className='donate' >Ümumi İanə</li>
              <NavLink className='loginer' to='/login'>Daxil Ol</NavLink>
            </ul>
          </div>
          <div className="header-search">
            <div className="header-search-icon">
            <NavLink to='/addtobasket'>
            <i className="fa-solid fa-basket-shopping"></i>
            </NavLink>
                  
                   <i onClick={()=>setmodalSearch(true)} className="fa-solid fa-magnifying-glass"></i>   
                        
            </div>
          </div>
        </div>
      </div>
      {
        modalSearch && <Search setmodalSearch={setmodalSearch}/> 
      }
      {
        modalDonate && <CommonDonate setmodalDonate={setmodalDonate}/>
      }
    </header>
  )
}

export default Header