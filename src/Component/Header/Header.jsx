import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocila from './HeaderSocila'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mahmoud ELKHOUR</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocila/>

      <div className="me">
        <img src={ME} alt="me" />
      </div>
      
      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header
