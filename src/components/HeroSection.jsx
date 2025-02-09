import React from 'react'
import myImage from '../assets/3d-icon-product-management.png'; 

function HeroSection() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center relative text-white py-20'>
      {/* Background image with overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-10'></div>
      
      {/* Main content */}
      <div className='text-center z-10'>
        <div className='flex flex-col items-center space-y-4'>
          <h1 className='text-6xl md:text-8xl font-extrabold'>
            I <span className='text-purple-500'>SHIP</span>
          </h1>
          
          <div className='relative'>
            <img 
              src={myImage} 
              alt='hero' 
              className='mx-auto w-2/3 md:w-96 lg:w-[500px] mt-8 mb-8 animate-float'
            />
          </div>
          
          <h1 className='text-6xl md:text-8xl font-extrabold mb-6'>
            <span className='text-purple-500'>QUALITY</span> CODE
          </h1>

          {/* Motivational subtext */}
          <p className='text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4'>
            Turning coffee into code and dreams into reality.
            <br/>
            Building the future, one commit at a time.
          </p>

          {/* CTA Button */}
          <button className='mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 
            transition-colors duration-300 rounded-full font-bold text-lg'>
            View My Work
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
