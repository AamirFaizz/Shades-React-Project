
import React from 'react'
import img from '../photos/city.png'

const Seaction3 = () => {
    return (
        <div>
            <div className='bg-[#e3eef8] min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-48 mt-10 h-full max-h-full'>
                <div className='flex-2'>
                    <h3 className='text-blue-500 text-lg font-medium md:mb-10'>DESIGN IS EVERYTHING</h3>
                    <h1 className='text-[40px] md:text-5xl font-medium leading-12 mt-3 md:mt-0 md:leading-14'>Present your app <br className='hidden md:block' /> features like this way.</h1>
                    <p className='text-lg text-gray-500 mt-4 md:mt-7 mb-7 md:mb-20 tracking-wider md:tracking-normal leading-8 md:leading-normal'>We designed and tested prototypes that helped identify <br className='hidden md:block' /> pain points in the account creation process. Together, we <br className='hidden md:block' /> shaped the new standard.</p>

                    <div className='flex flex-col md:flex-row gap-4 md:gap-12'>
                        <div>
                            <h5 className='text-4xl bg-blue-500 rounded-full inline-block px-3 py-2 text-white'><i class="ri-pencil-fill"></i></h5>
                            <h2 className='md:text-2xl text-xl font-bold mt-3 md:mt-6'>Easy to Use</h2>
                            <p className='text-md text-gray-500 font-medium mt-2 tracking-wider md:tracking-normal leading-7'>Event is not like most tech <br className='hidden md:block' /> conferences. We want our design <br className='hidden md:block' /> to engage.</p>
                        </div>

                        <div>
                            <h5 className='text-4xl bg-blue-500 rounded-full inline-block px-3 py-2 text-white mt-7 md:mt-0'><i class="ri-tablet-fill"></i></h5>
                            <h2 className='md:text-2xl text-xl font-bold md:mt-6 mt-3'>Easy to Use</h2>
                            <p className='text-md text-gray-500 font-medium mt-2 tracking-wider md:tracking-normal leading-7'>Event is not like most tech <br className='hidden md:block' /> conferences. We want our design <br className='hidden md:block' /> to engage.</p>
                        </div>

                    </div>
                </div>

                <div className='flex-1 mt-8 md:mt-0'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Seaction3