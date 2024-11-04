import React from "react";
import { NavLink } from "react-router-dom";
import {assets} from '../assets/assets/assets'

const NavBar = () =>{
return(
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} className='w-36' alt="logo"/>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/'className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>
            <NavLink to='/'className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>
            <NavLink to='/'className='flex flex-col items-center gap-1'>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>
        </ul>
    </div>
)
}

export default NavBar