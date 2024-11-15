import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import ig_icon from '../../assets/facebook_icon.png'
import fb_icon from '../../assets/instagram_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={ig_icon} alt="" />
        <img src={fb_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help center</li>
        <li>Gift cards</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Legal notices</li>
        <li>Contact us</li>
      </ul>
      <p className='copyright-text '>1997-2023 Netflix,Inc</p>
    </div>
  )
}

export default Footer
