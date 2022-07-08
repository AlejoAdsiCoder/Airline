import React from 'react'
import { Lang } from './Lang'

export const Navbar = () => {
  return (
    <div className='head__functions'>
        <Lang />
        <nav className='head__navbar'>
            <a className='head__link' href='#'>Home</a>
            <a className='head__link' href='#'>About</a>
            <a className='head__link' href='#'>Destinations</a>
            <a className='head__link' href='#'>Contact</a>
        </nav>
    </div>
  )
}
