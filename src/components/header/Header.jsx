import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/assets/me.png'
import Headersocial from './Headersocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm </h5>
        <h1>Julian Patrick Cordeiro</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <Headersocial />

        <div className="me">
          <img src= {ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header