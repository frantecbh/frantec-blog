import React from 'react'

import logo from '../assets/logo1.png'
import imgLeft from '../assets/effectLeft.svg'
import imgRight from '../assets/effectRight.svg'


export const Header = () => {
  return (
    <div className="bg-Profile w-full h-50 flex items-center justify-between">
      <img className='h-20  md:h-48' src={imgLeft} alt="" />
      
      <img className='h-20  md:h-48' src={imgRight} alt="" />

    </div>
  )
}
