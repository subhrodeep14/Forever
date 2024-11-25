import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [visiable,setVisiable]=useState(false);
    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <img src={assets.logo} className='w-36' alt="" />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className=' flex flex-col items-center gap-1 '>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collections' className=' flex flex-col items-center gap-1 '>
                    <p>COLLECTIONS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className=' flex flex-col items-center gap-1 '>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className=' flex flex-col items-center gap-1 '>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>



            </ul>
            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                <div className=' group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
                        <div className='flex flex-col gap-2 w-36 py-4 px-5 bg-slate-200 text-gray-500 rounded'>
                            <p className=' cursor-pointer hover:text-black'>My Profile</p>
                            <p className=' cursor-pointer hover:text-black'>Orders</p>
                            <p className=' cursor-pointer hover:text-black'>Logout</p>
                        </div>

                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className=' absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>5</p>
                </Link>
                <img onClick={()=>setVisiable(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>
            {/* Sidebar icons for small screens*/}
            <div className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visiable ?'w-full' :'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisiable(false)} className='flex items-center gap-4 p-3 '>
                        <img  src={assets.dropdown_icon} className='h-4 rotate-180 cursor-pointer' alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisiable(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisiable(false)} className='py-2 pl-6 border' to='/collections'>COLLECTIONS</NavLink>
                    <NavLink onClick={()=>setVisiable(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisiable(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>

                </div>

            </div>
        </div>
    )
}

export default Navbar
