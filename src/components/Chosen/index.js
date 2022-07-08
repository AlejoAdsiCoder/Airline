import React from 'react'

export const Chosen = (props) => {
  return (
    <div>
        <p className='main__chosentxt'>{props.data}</p>
        <div className='main__chosen'>Chosen destination</div>
    </div>
  )
}
