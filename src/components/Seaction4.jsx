
import React from 'react'
import img1 from '../photos/1st.png'
import img2 from '../photos/2nd.png'
import img3 from '../photos/3rd.png'
import logo1 from '../photos/logo1.png'
import logo2 from '../photos/logo2.png'
import logo3 from '../photos/logo3.png'
import logo4 from '../photos/logo4.png'
import logo5 from '../photos/logo5.png'

const Seactions4 = () => {
  return (
    <div>
      <div className='px-6 md:px-48 flex flex-col md:flex-row justify-between md:mt-30 mt-5 gap-6 md:gap-8 h-full max-h-full'>

        <div>
          <h3 className='text-blue-500 text-md md:text-lg font-medium md:mb-9 mb-5 tracking-wide md:tracking-normal'>CUSTOMERS’ STORY</h3>
          <h1 className='text-[40px] md:text-5xl font-medium tracking-wider md:tracking-normal leading-12 md:leading-normal'>50k+ users are showing love.</h1>
          <p className='text-lg text-gray-500 mt-6 md:leading-8 leading-8 tracking-wider'>We designed and tested prototypes that helped identify pain points in the account creation process. Together, we shaped the new standard.</p>
        </div>


        <div>
          <div className='bg-white md:p-8 p-4 h-fit rounded'>
            <p className='text-lg font-medium text-gray-700 leading-8 md:leading-normal'>We designed and tested prototypes that helped identify pain points in the account creation process. Together, we shaped the new standard.</p>
            <div className='flex gap-6 items-center mt-5 md:mt-8'>
              <div>
                <img src={img1} alt="" />
              </div>

              <div>
                <h2 className='text-lg font-medium'>Cameron Anderson</h2>
                <p>Designer</p>
              </div>
            </div>
          </div>

          <div className='bg-white p-4 md:p-8 h-fit mt-8 rounded'>
            <p className='text-lg font-medium text-gray-700 leading-8 md:leading-normal'>We designed and tested prototypes that helped identify pain points in the account creation process. Together, we shaped the new standard.</p>
            <div className='flex gap-6 items-center mt-5 md:mt-8'>
              <div>
                <img src={img2} alt="" />
              </div>

              <div>
                <h2 className='text-lg font-medium'>Cameron Anderson</h2>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>


        <div className='md:-mt-8 mt-2.5'>
          <div className='bg-white p-4 md:p-8 h-fit rounded'>
            <p className='text-lg font-medium text-gray-700 leading-8 md:leading-normal'>We designed and tested prototypes that helped identify pain points in the account creation process. Together, we shaped the new standard.</p>
            <div className='flex gap-6 items-center mt-5 md:mt-8'>
              <div>
                <img src={img3} alt="" />
              </div>

              <div>
                <h2 className='text-lg font-medium'>Cameron Anderson</h2>
                <p>Designer</p>
              </div>
            </div>
          </div>

          <div className='bg-white p-4 md:p-8 h-fit mt-8 rounded'>
            <p className='text-lg font-medium text-gray-700 leading-8 md:leading-normal'>We designed and tested prototypes that helped identify pain points in the account creation process. Together, we shaped the new standard.</p>
            <div className='flex gap-6 items-center mt-5 md:mt-8'>
              <div>
                <img src={img2} alt="" />
              </div>

              <div>
                <h2 className='text-lg font-medium'>Cameron Anderson</h2>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='flex flex-col md:flex-row md:px-48 px-6 gap-6 md:gap-0 items-center md:justify-between py-10 md:py-20 md:mt-10'>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
      </div>
    </div>
  )
}

export default Seactions4