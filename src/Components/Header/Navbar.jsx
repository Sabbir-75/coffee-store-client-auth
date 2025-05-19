import React from 'react';
import icon from "../../assets/images/more/logo1.png"
import { NavLink } from 'react-router';
import "./Nav.css"

const Navbar = () => {
    return (
        <div className='bg-[rgb(55,39,39)] py-4 flex gap-4 justify-center items-center'>
            <div className='max-w-[80px] flex justify-center items-center'>
                <img className='w-full' src={icon} alt={icon} />
            </div>
            <h1 className='text-3xl text-white font-semibold'>Espresso Emporium</h1>
            <div className='activeClass'>
                <NavLink to={"/signup"}><button className='background hover:bg-[#E3B577] hover:text-[#372727] duration-200 px-4 flex py-2 text-lg cursor-pointer text-[#E3B577] rounded-sm font-bold border-2 border-[#E3B577]'>Signup</button></NavLink>
            </div>
            <div className='activeClass'>
                <NavLink to={"/login"}><button className='background hover:bg-[#E3B577] hover:text-[#372727] duration-200 px-4 flex py-2 text-lg cursor-pointer text-[#E3B577] rounded-sm font-bold border-2 border-[#E3B577]'>Login</button></NavLink>
            </div>
            <div className='activeClass'>
                <NavLink to={"/users"}><button className='background hover:bg-[#E3B577] hover:text-[#372727] duration-200 px-4 flex py-2 text-lg cursor-pointer text-[#E3B577] rounded-sm font-bold border-2 border-[#E3B577]'>Users</button></NavLink>
            </div>
        </div>
    );
};

export default Navbar;