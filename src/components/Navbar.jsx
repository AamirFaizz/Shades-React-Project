
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../photos/logo.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-6 md:py-5 px-6 md:px-48 h-full max-h-full w-full max-w-full'>
            <div className='flex gap-20'>

                <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    <img src={logo} alt="" />
                </NavLink>

                <div className='hidden md:flex items-center gap-8'>
                    <NavLink to={'/demos'} className={({ isActive }) => isActive ? 'text-blue-500' : 
                    ' text-gray-600'}>Demos</NavLink>
                    <NavLink to={'/features'} className={({ isActive }) => isActive ? 'text-blue-500' : ' text-gray-600'}>Features</NavLink>
                    <NavLink to={'/services'} className={({ isActive }) => isActive ? 'text-blue-500' : ' text-gray-600'}>Services</NavLink>
                    <NavLink to={'/pricing'} className={({ isActive }) => isActive ? 'text-blue-500' : ' text-gray-600'}>Pricing</NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-blue-500' : ' text-gray-600'}>Contact</NavLink>
                </div>

            </div>
            <div className='border-2 border-blue-500 px-5 py-2 text-lg font-medium rounded hidden md:flex'>
                <NavLink to={'./getstarted'} className={({ isActive }) => isActive ? 'text-gray-600' : 
                'text-blue-500'}>GetStarted</NavLink>
            </div>
            <div className='block md:hidden'>
                <h4 className='text-3xl font-medium'><i class="ri-menu-line"></i></h4>
            </div>
        </div>
    )
}

export default Navbar