
import React from 'react'
import img from '../photos/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    
    return (
        <div className='px-6 md:px-48 md:mt-35 mt-8 md:pb-25 pb-5 h-full h-max-full'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col md:gap-5 gap-8'>
                    <Link to={'/'}>
                        <img className='w-[45%]' src={img} alt="" />
                    </Link>
                    <p className='text-gray-500 font-medium text-lg md:text-sm tracking-wider md:tracking-normal leading-7 md:leading-normal'>Big, small, online, offline, local. Size doesn't <br className='hidden md:block'/> matter. We work on diverse projects for top <br className='hidden md:block'/> brands as well as for cool startups.</p>
                    <div className='flex md:gap-5 gap-7 text-3xl md:text-2xl font-medium'>
                        <Link className='cursor-pointer hover:opacity-60'><i class="ri-facebook-fill"></i></Link>
                        <Link className='cursor-pointer hover:opacity-60'><i class="ri-twitter-fill"></i></Link>
                        <Link className='cursor-pointer hover:opacity-60'><i class="ri-linkedin-fill"></i></Link>
                    </div>
                </div>

                <div className='flex flex-col gap-3 md:gap-2'>
                    <h5 className='mt-10 md:mt-0 text-2xl md:text-md font-medium cursor-pointer hover:opacity-80 text-gray-500'>Help Menu</h5>
                    <h4 className='mt-1 md:mt-3 cursor-pointer text-lg md:text-sm hover:opacity-60 font-medium'>Abouts</h4>
                    <h4 className='cursor-pointer hover:opacity-60 text-lg md:text-sm font-medium'>Features</h4>
                    <h4 className='cursor-pointer hover:opacity-60 text-lg md:text-sm font-medium'>Works</h4>
                    <h4 className='cursor-pointer hover:opacity-60 text-lg md:text-sm font-medium'>Careers</h4>
                </div>

                <div className='flex flex-col gap-3 md:gap-2'>
                    <h5 className=' text-2xl md:text-md font-medium mt-10 md:mt-0 cursor-pointer hover:opacity-80 text-gray-500'>Supports</h5>
                    <h4 className='mt-1 md:mt-3 cursor-pointer hover:opacity-60 font-medium text-lg md:text-sm'>Contacts</h4>
                    <h4 className='cursor-pointer hover:opacity-60 text-lg md:text-sm font-medium'>Help & Supports</h4>
                    <h4 className='cursor-pointer hover:opacity-60 text-lg md:text-sm font-medium'>privacy Policy</h4>
                    <h4 className='cursor-pointer hover:opacity-60 text-lg md:text-sm font-medium'>Terms & Conditions</h4>
                </div>

                <div className='flex flex-col gap-3 md:gap-2'>
                    <h5 className='text-2xl md:text-md font-medium cursor-pointer mt-10 md:mt-0 hover:opacity-80 text-gray-500'>Products</h5>
                    <h4 className='mt-1 md:mt-3 cursor-pointer hover:opacity-60 font-medium text-lg md:text-sm'>Shades Pro</h4>
                    <h4 className='cursor-pointer hover:opacity-60 text-lg md:text-sm font-medium'>Essential Blocks</h4>
                    <h4 className='cursor-pointer hover:opacity-60 text-lg md:text-sm font-medium'>Avasta Dash</h4>
                    <h4 className='cursor-pointer hover:opacity-60 text-lg md:text-sm font-medium'>vApp Landing Page</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer 