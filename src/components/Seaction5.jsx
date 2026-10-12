
import React from 'react'
import banner from '../photos/banners.png'
import { Link } from 'react-router-dom'

const Seaction5 = () => {
    return (
        <div>
            <div className='bg-cover bg-center text-gray-50 w-ful max-w-full h-full max-h-full' style={{ backgroundImage: `url(${banner})` }}>
                <h3 className='md:text-lg font-medium text-center md:pt-30 pt-14'>IT’S TIME TO TASTE IT</h3>
                <h1 className='text-[28px] md:text-5xl font-bold text-center leading-normal md:leading-15 md:mt-8 mt-4 md:mb-20'>Ready to use our service? <br /> Choose a package.</h1>
                <div className='flex flex-col md:flex-row md:justify-center md:gap-7 px-7 md:px-0 mt-9 md:mt-0'>
                    <div className='bg-[#2b405a] p-7 md:p-10 flex flex-col md:gap-5 gap-3 md:mb-20 mb-7'>
                        <h4 className='font-medium'>BASIC</h4>
                        <h3 className='flex'><span className='flex items-start mt-1 text-lg'>$</span><span className='text-5xl font-bold'>19</span><span className='flex items-end'>/month</span></h3>
                        <p>Good for small business launching their <br /> products less then once a year</p>

                        <div className='flex gap-3'>
                            <h4 className='text-2xl'><i class="ri-check-line"></i></h4>
                            <h5 className='font-medium'>Unlimited Blocks</h5>
                        </div>
                        <div className='flex gap-3'>
                            <h4 className='text-2xl'><i class="ri-check-line"></i></h4>
                            <h5 className='font-medium'>5GB Clould Storages</h5>
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                            <h4 className='text-2xl'><i class="ri-check-line"></i></h4>
                            <h5 className='line-through font-medium'>Custom Domain Names</h5>
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                            <h4 className='text-2xl'><i class="ri-check-line"></i></h4>
                            <h5 className='line-through font-medium'>Unlimited Emails</h5>
                        </div>
                        <Link to={'/'} className='bg-blue-500 w-fit px-8 py-3 rounded font-medium hover:opacity-85'>Start Free trial</Link>
                        <p className='md:-mt-3'>No credit card required</p>
                    </div>



                    <div className='bg-gray-50 text-gray-900 p-7 md:p-10 md:mb-20 mb-7 flex 
                    flex-col gap-3 md:gap-5'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-medium'>Pro</h2>

                            <h3 className='bg-[#4eab08] rounded-4xl px-3 py-1.5 text-gray-50 text-sm font-medium'>popular</h3>

                        </div>
                        <h3 className='flex'><span className='flex items-start mt-1 text-lg'>$</span><span className='text-5xl font-bold'>29</span><span className='flex items-end'>/month</span></h3>

                        <p>Good for small business launching their <br /> products less then once a year</p>
                        <div className='flex gap-3'>
                            <h4 className='text-2xl'><i class="ri-check-line"></i></h4>
                            <h5 className='font-medium'>Unlimited Blocks</h5>
                        </div>

                        <div className='flex gap-3'>
                            <h4 className='text-2xl'><i class="ri-check-line"></i></h4>
                            <h5 className='font-medium'>5GB Clould Storages</h5>
                        </div>

                        <div className='flex gap-3'>
                            <h4 className='text-2xl'><i class="ri-check-line"></i></h4>
                            <h5 className='font-medium'>Custom Domain Names</h5>
                        </div>

                        <div className='flex gap-3'>
                            <h4 className='text-2xl'><i class="ri-check-line"></i></h4>
                            <h5 className='font-medium'>Unlimited Emails</h5>
                        </div>
                        <Link className='bg-[#fc593b] w-fit px-8 py-3 text-gray-50 cursor-pointer rounded font-medium hover:opacity-85'>Start Free trial</Link>
                        <p className='md:-mt-3'>No credit card required</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seaction5