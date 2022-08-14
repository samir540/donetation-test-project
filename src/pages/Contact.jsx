import React from 'react'
import Footer from '../Companents/Footer/Footer';
function Contact() {
  return (
    <section>
      <div className='contact'>
<div className="container">
<div className="contact-content">
  <div className="contact-items">
<h1>BİZİMLƏ ƏLAQƏ</h1>
<h5>AD *</h5><input type="text" name="" id="" /><br />
<h5>SOYAD *</h5><input type="text" name="" id="" /><br />
<h5>E-POSTA *</h5><input type="text" name="" id="" /><br />
<h5>TELEFON *</h5><input type="text" name="" id="" /><br />
<textarea className='textarea' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
<button>SEND MESSAGE</button>
  </div>
  <div className="contact-image">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3039.1789789278064!2d49.82203171744384!3d40.38272570000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1saz!2s!4v1658183255055!5m2!1saz!2s"></iframe>
  </div>
</div>
</div>
      </div>
      <Footer/>
    </section>
  )
}

export default Contact;