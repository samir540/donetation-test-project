import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
function Login() {
  const confirmRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: ""
  });
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const changeInput = (e) => {
    setUser(
      { ...user, [e.target.name]: e.target.value }
    );
  }
  console.log(user);
  const handleClick = (e) => {
    if (user.password.length < 1 && user.name.length < 1) {
      window.confirm("İstifadəçi adını daxil edin");
      window.confirm("Şifrəni  daxil edin");
    }
    else if (user.name.length < 8) {
      window.confirm("İstifadəçi adı yanlışdır");
    }
    else if (user.name.length > 7 && user.password.length < 1) {
      window.confirm("Şifrəni daxil edin");
    }
    else if (user.password.length < 8) {
      window.confirm("Şifrə yanlışdır");
    }
    else {
      setUsers([...users, user]);
      setUser(user.value = "")
      navigate("/");
    }
  }
  console.log(users)
  const confirmItem = () => {
    confirmRef.current.classList.toggle("show");
  }
  return (
    <section>
      <div className="login">
        <div className="container">
          <div className="login-content">
            <div className="login-register">
              <div className="login-register-content">
                <div className="login-heading">
                  <h2>Hesabınıza daxil olun</h2>
                  <span>Tək giriş LDAP etimadnaməsini daxil edin.</span>
                </div>
                <div className="login-input">
                  <form onSubmit={handleSubmit}>
                    <h5>İstifadəçi adı  <span>*</span></h5><br />
                    <input onChange={changeInput} type="text" value={user.value} name="name" /> <br />
                    <h5>Şifrə  <span>*</span></h5> <br />
                    <input onChange={changeInput} type="password" name="password" />
                  </form>
                  <div className="login-keep">
                    <div onClick={confirmItem} className="login-box">
                      <i ref={confirmRef} className="fa-solid fa-check"></i>
                    </div>
                    <div className="login-box-writting">
                      <span>Məni 30 gün ərzində girişdə saxlayın.</span>
                    </div>
                  </div>
                </div>
                <div className="login-button">
                  <button onClick={handleClick}>Daxil olun</button>
                </div>
                <div className="login-icon">
                  <a href="https://www.google.com/" target="_blank">
                    <i className="fa-brands fa-google"></i>

                  </a>
                  <a href="https://www.messenger.com/" target="_blank">
                    <i className="fa-brands fa-facebook-messenger"></i>

                  </a>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter"></i>

                  </a>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.whatsapp.com/" target="_blank">
                    <i className="fa-brands fa-whatsapp"></i>

                  </a>
                </div>
                <div className="login-register-link">
                  <p>Hesab lazımdır? <a onClick={() => window.location = '/register'}>Qeydiyyatdan keçmək.</a></p>
                  <a>İstifadəçi adı və ya parolu unutmusunuz?</a>
                </div>
              </div>
            </div>
            <div className="login-item">
              <div className="login-logo">
                <div className="login-logo-details">
                  <i className="fa-brands fa-pagelines"></i>
                </div>
                <span>
                  <Typewriter
                    options={{
                      strings: ['Həyat Fondu'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <div className="login-home-link">
                <Link to='/' className='span'>Siz bu linkdən istifadə edərək qeydiyyatdan keçmədən <br /> Əsas Səhifəyə daxil ola bilərsiniz</Link>

              </div>
              <div className="login-link">
                <span>İstifadə qaydaları</span>
                <span className='gap'>Kömək edin</span>
                <span>Gizlilik Siyasəti</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default (Login)