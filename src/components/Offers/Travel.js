import React from 'react'

export const Travel = ({image, title, price, className}) => {
  return (
    <section className={className}>
      <div className='main__text'>
        <p className='main__trip'>{title}</p>
        <span className='main__price'>Price: {price}</span>
      </div>
    </section>
  )
}
