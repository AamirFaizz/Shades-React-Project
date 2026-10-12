
import React from 'react'

const Seaction1 = () => {
    return (
        <div className='bg-[#e3eef8] flex flex-col md:flex-row justify-between py-5 my-6 md:my-22 px-6 md:px-48 h-full max-h-full'>
            <div className='flex gap-3 md:gap-5'>
                <div>
                    <h4 className='text-blue-500 text-3xl md:text-5xl font-bold'><i class="ri-pencil-fill"></i></h4>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl md:text-2xl font-semibold'>Easy to Use</h1>
                    <p className='text-md text-gray-500 mb-9 md:mb-0 tracking-wider md:tracking-normal leading-7 md:leading-normal'>Editing and customizing Essential <br /> Landing is easy and fast.</p>
                </div>
            </div>

            <div className='flex gap-4 md:gap-5'>
                <div>
                    <h4 className='text-blue-500 text-3xl md:text-5xl font-bold'><i class="ri-stack-fill"></i></h4>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl md:text-2xl font-semibold'>100% Responsive</h1>
                    <p className='text-md text-gray-500 mb-9 md:mb-0 tracking-wider md:tracking-normal leading-7 md:leading-normal'>Editing and customizing Essential <br /> Landing is easy and fast.</p>
                </div>
            </div>

            <div className='flex gap-4 md:gap-5'>
                <div>
                    <h4 className='text-blue-500 text-3xl md:text-5xl font-bold'><i class="ri-tablet-fill"></i></h4>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className=' text-xl md:text-2xl font-semibold'>50+ New Pages</h1>
                    <p className='text-md text-gray-500 tracking-wider md:tracking-normal leading-7 md:leading-normal'>Editing and customizing Essential <br /> Landing is easy and fast.</p>
                </div>
            </div>
        </div>
    )
}

export default Seaction1