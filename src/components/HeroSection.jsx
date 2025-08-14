import React, { useEffect, useRef } from 'react'

function HeroSection() {
  const animationRef = useRef(null);

  useEffect(() => {
    // Wait for the script to load and then try to initialize
    const checkAndInit = () => {
      if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
        console.log('Unicorn Studio found, initializing...');
        try {
          window.UnicornStudio.init();
          console.log('Unicorn Studio initialized successfully');
          
          // Try alternative approach - append animation to body if it's not working
          setTimeout(() => {
            if (animationRef.current && !animationRef.current.children.length) {
              console.log('Trying alternative approach - appending to body');
              const altAnimation = document.createElement('div');
              altAnimation.setAttribute('data-us-project', 'l3hk3f2saqv3PrNcB8vL');
              altAnimation.style.width = '100vw';
              altAnimation.style.height = '100vh';
              altAnimation.style.position = 'absolute';
              altAnimation.style.top = '0';
              altAnimation.style.left = '0';
              altAnimation.style.zIndex = '0';
              
              // Replace the current container content
              animationRef.current.innerHTML = '';
              animationRef.current.appendChild(altAnimation);
            }
          }, 2000);
          
        } catch (error) {
          console.error('Error initializing Unicorn Studio:', error);
        }
      } else {
        console.log('Unicorn Studio not ready yet, retrying...');
        setTimeout(checkAndInit, 500);
      }
    };

    // Start checking after a short delay
    const timer = setTimeout(checkAndInit, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center relative text-white py-20'>
      {/* Main content - Above the animation */}
      <div className='text-center z-20 relative'>
        <div className='flex flex-col items-center space-y-4'>
          <h1 className='text-6xl md:text-8xl font-extrabold'>
            I <span className='text-purple-500'>SHIP</span>
          </h1>
          
          <h1 className='text-6xl md:text-8xl font-extrabold mb-6'>
            <span className='text-purple-500'>QUALITY</span> 
          </h1>

          {/* CTA Button */}
          <button className='mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 
            transition-colors duration-300 rounded-full font-bold text-lg'>
            View My Work
          </button>
        </div>
      </div>

      {/* Unicorn Studio Animation - Full window size */}
      <div 
        ref={animationRef}
        data-us-project="l3hk3f2saqv3PrNcB8vL" 
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '0'
        }}
      />
      
      {/* Background overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/30 -z-10'></div>
    </div>
  )
}

export default HeroSection
