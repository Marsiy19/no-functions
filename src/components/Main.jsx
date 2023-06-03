import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://www.gamebuy.ru/sites/default/files/imagecache/screenshot_1280/screenshots/assassins_creed_ecio_auditore._kollekciya/55812_screen_assassins_creed_ecio_auditore._kollekciya.jpg" alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50 '>
          <div className='max-w-[700px] m-auto h-full flex flex-col justify-center items-center'>

          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Marsiy Poliy</h1>
            <h2 className='sm:text-4xl text-3xl pt-4 text-gray-800'> <span>I'm a   </span>  

            <TypeAnimation
      sequence={[
        'Developer',
        2000,
        'Coder', 
        2000, 
        'Tech Enthusiat',
        2000,

      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block' }}
    />

            </h2>
            <div className='flex justify-between items-center pt-6 max-w-[200px] w-full'>
              <FaTwitter size={20} className='cursor-pointer'/> 
              <FaFacebookF size={20} className='cursor-pointer'/>
              <FaInstagram size={20} className='cursor-pointer'/>
              <FaLinkedinIn size={20} className='cursor-pointer'/>
              
            </div>
          </div>

        </div>

        
    </div>
  )
}

export default Main