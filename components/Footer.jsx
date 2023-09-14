import React from 'react'
import { AiFillInstagram,AiOutlineTwitter,AiFillFacebook,AiOutlineWhatsApp } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 M-Kart Online Shopping All Right Reserverd</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
        <AiFillFacebook/>
        <AiOutlineWhatsApp/>
      </p>
    </div>
  )
}

export default Footer