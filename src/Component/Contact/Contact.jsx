import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rr36d18', 'template_8muctuz', form.current, 'ZstvsTxGSIdZnWHdA')

    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <HiOutlineMail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>elkhour@ gmail.com</h5>

            <a href="mailto:mahmoud.reda45667@gmail.com" target='_blank'>Sen a message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Mahmoud Elkhour</h5>
            <a href="https://m.me/t/100016369601074" target='_blank'>Sen a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+7910-628-80-89</h5>

            <a href="https://api.whatsapp.com/send?phone=89106288089" target='_blank'>Sen a message</a>
          </article>

        </div>
  <form ref={form} onSubmit={sendEmail} >
  <input type="text" name='name' placeholder='Your Full Name' required />
  <input type="text" name='email' placeholder='Your Email' required />
  <textarea name="message"placeholder='Your Message' required  rows="7"></textarea>
  <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
      </div>



    </section>
  )
}

export default Contact
