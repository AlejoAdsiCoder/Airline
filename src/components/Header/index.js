import React from 'react';
import { HeadLayout } from '../../Layouts/Head/HeadLayout';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div>
      <HeadLayout>
      
        <div className='head__content'>
          <div className='head__bar'>
            <a href="#" className='head__logo'>AIRLINE</a>
            <Navbar />
          </div>
          <section className="head__txt">
            <h1 className='head__title'>Visit Canada with prices from $800</h1>
            <p className='head__subtitle'>Prepare your bags and forget your worries to start enjoying your holidays in this fantastic country</p>
            <button className='head__button'>buy now</button>
          </section>
        </div>
      </HeadLayout>
    </div>
  )
}
