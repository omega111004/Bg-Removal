import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      <img width={150} src={assets.logo} alt="logo" />

      {/* Vertical Line */}
      <div className="w-px h-6 bg-gray-400 max-sm:hidden"></div>

      {/* Copyright Text */}
      <p className='flex-1 pl-4 text-sm text-gray-500 max-sm:hidden'>
        Copyright @GreatStack.dev | All rights reserved.
      </p>

      {/* Social Icons */}
      <div className='flex gap-2'>
        <img 
          width={40} 
          src={assets.facebook_icon} 
          alt="facebook"
          className='cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80'
        />
        <img 
          width={40} 
          src={assets.twitter_icon} 
          alt="twitter"
          className='cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80'
        />
        <img 
          width={40} 
          src={assets.google_plus_icon} 
          alt="google plus"
          className='cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80'
        />
      </div>
    </div>
  )
}

export default Footer;
