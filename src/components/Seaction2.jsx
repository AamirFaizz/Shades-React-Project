
import React from 'react'
import mobile from '../photos/mobile.png'
import { Link } from 'react-router-dom'

const Seaction2 = () => {
    return (
        <div>
            <div className='bg-[#258aff] md:h-screen flex flex-col md:flex-row items-center gap-3 md:gap-20 px-6 md:px-48 py-5 md:py-0 h-full max-h-full '>
                <div className='flex-1'>
                    <img className='object-cover w-[80%] m-auto md:m-0' src={mobile} alt="" />
                </div>

                <div className='flex-1 flex flex-col gap-4 md:gap-6 text-white'>
                    <h3 className='md:text-lg mt-4 md:mt-0'>DESIGN IS EVERYTHING</h3>
                    <h1 className='text-4xl md:text-5xl font-semibold md:leading-14'>Present your app <br className='hidden md:block' /> features like this way.</h1>
                    <p className='text-lg text-gray-300 tracking-wider md:tracking-normal leading-8 md:leading-normal'>We designed and tested prototypes that helped identify <br className='hidden md:block' /> pain points in the account creation process. Together, we <br className='hidden md:block' /> shaped the new standard.</p>
                    <Link to={'/GetStarted'} className='text-lg font-medium hover:opacity-85 px-12 py-3 md:px-19 md:py-5 bg-white w-fit rounded text-[#258aff]'
                    >Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Seaction2