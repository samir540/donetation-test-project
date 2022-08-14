import React from 'react'
import './Registration.css'
import Typewriter from 'typewriter-effect';
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux';
import {useEffect} from 'react';
function Registration() {
  const nav = useNavigate();
  const enter = () => {
    nav("/login")
  }
  return (
  <section>
    <div className='registration'>
        <div className="container">
             <div className="registration-content">
             <div className="registration-form">
<div className="container">
<div className="registration-title">
                <h1>
                <Typewriter
  options={{
    strings: ['Qeydiyyat Formu'],
    autoStart: true,
    loop: true,
  }}
/>
                </h1>
      
            </div>
<div className="registration-input-items">
    <div className="registration-input-title">
    <h4>Tam Adı <span>*</span></h4>
    <h4>Soyad <span>*</span></h4>
    <h4>E-poçt ünvanı <span>*</span></h4>
    <h4>Telefon <span>*</span></h4>
    <h4>Şifrə <span>*</span></h4>
    <h4>Şifrə Təstiqi <span>*</span></h4>
    </div>
   <div className="registration-inputs">
   <form>
      <input type="text" name="" id="" placeholder='Cavid' /> <br /> 
    <input type="text" name="" id=""  placeholder='Ağayev'/> <br />
      <input type="text" name="" id="" placeholder='contactwithagh@gmail.com' /> <br />
     <input type="number" name="" id="" placeholder='+994'/> <br />
      <input type="password" name="" id=""  placeholder='Şifrə'/> <br />
      <input type="password" name="" id="" placeholder='Təstiq Şifrəsi' />
    </form>
   </div>
</div>
<div className="registration-submit">
    <button>Qeydiyyatdan Keçin</button>
    <button onClick={enter} className='btn'>Daxil Ol</button>
</div>
</div>
                </div>
             </div>
        </div>
     </div>
  </section>
  )
}
const t = (a) => a;
export default connect(t)(Registration);