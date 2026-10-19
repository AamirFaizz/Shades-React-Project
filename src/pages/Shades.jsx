
import React from 'react'
import Seaction1 from '../components/Seaction1'
import Seaction2 from '../components/Seaction2'
import Seaction3 from '../components/Seaction3'
import Seaction4 from '../components/Seaction4'
import Seaction5 from '../components/Seaction5'
import Footer from '../components/Footer'

const Shades = () => {
  return (
    <div>
      <div className='md:text-center flex flex-col gap-3 md:gap-7 px-6 md:px-48 h-full max-h-full w-full max-w-full'>
        <h2 className='text-md md:text-xl font-medium text-gray-500 mt-5 lg:mt-30'>PRESENT YOUR SERVICE</h2>
        <h1 className='text-[46px] lg:text-[80px] font-semibold leading-tight lg:leading-22 text-gray-800'>Make landing page <br className='hidden md:block'/> fast and easily.</h1>
        <p className='text-lg md:text-xl md:font-semibold md:text-gray-400 text-gray-500 leading-9 md:leading-normal tracking-widest md:tracking-normal mb-4 md:mb-0'>Create custom landing pages with Shades that convert <br className='hidden md:block'/> more visitors than any website—no coding required.</p>

        <div className='flex-row md:flex gap-5 justify-center'>
          <input required className='px-7 py-3 mb-5 w-full md:max-w-fit md:mb-0 bg-white text-gray-600 
          text-lg border-none outline-none rounded' type="email"
            placeholder='Enter Your Email' />
          <button className='px-24.5 py-3 md:px-18 md:py-3 bg-[#fc593b] text-gray-200 text-xl font-medium cursor-pointer w-full md:max-w-fit hover:opacity-85 rounded'>Submit</button>
        </div>
        <p className='text-gray-400 md:text-lg mt-2 md:mt-0'>Trused by over 50,000+ customers</p>
      </div>
      <Seaction1 />
      <Seaction2 />
      <Seaction3 />
      <Seaction4 />
      <Seaction5 />
      <Footer />
    </div>
  )
}

export default Shades