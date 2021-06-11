import React from 'react'
import Button from './Button'
import './Footer.css'
import {BrowserRouter, Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
           <section className="footer-subscription">
               <p className="footer-subscription-heading">
                   Follow my adventure with my social media
               </p>
           </section>
           <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/yeh_rom/?hl=ru">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=100006831104283">Facebook</a>
            <a href="https://github.com/Morozov-sys">Github</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              YM
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>All Rights Reserved © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/profile.php?id=100006831104283'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/yeh_rom/?hl=ru'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
                   </div>
               </div>
           </section> 
        </div>
    )
}

export default Footer
