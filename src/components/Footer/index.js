import React from 'react'
import { Social } from './Social'

export const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <Social />
            <section className='footer__section'>
              <section className='footer__about'>
                <p className='footer__about--title'>About Us</p>
                <p className='footer__about--summary'>we want to help passengers to reach their destinations</p>
              </section>
              
              <section className='footer__links'>
                <p className='footer__about--title'>Explore</p>
                <ul className='footer__links'>
                  <li className='footer__about--item'>Home</li>
                  <li className='footer__about--item'>destinations</li>
                  <li className='footer__about--item'>About</li>
                </ul>
              </section>
              <section className='footer__links'>
                <p className='footer__about--title'>Information</p>
                <ul className='footer__links'>
                  <li className='footer__about--item'>More search</li>
                  <li className='footer__about--item'>Blog</li>
                  <li className='footer__about--item'>Testimonials</li>
                </ul>
              </section>
              <section className='footer__links'>
                <p className='footer__about--title'>Services</p>
                <ul className='footer__links'>
                  <li className='footer__about--item'>Manage My Bookings</li>
                  <li className='footer__about--item'>Checkin</li>
                  <li className='footer__about--item'>Hotel</li>
                  <li className='footer__about--item'>Cars</li>
                </ul>
              </section>
            </section>
        </footer>
    </div>
  )
}
