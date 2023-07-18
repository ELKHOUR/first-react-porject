import React from 'react'
import  './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'




const Footer = () => {
  return (
    <footer>
      
      <a href="#" className='footer__logo'>ELKHOUR</a>
      
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Expeirience</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com"><FaFacebook/></a>
          <a href="https//instagram.com"><FiInstagram/></a>
          <a href="https://twitter.com"><IoLogoTwitter/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; ELKHOUR Tutorials. All Rights reserved.</small>
        </div>


    </footer>
  )
}

export default Footer
