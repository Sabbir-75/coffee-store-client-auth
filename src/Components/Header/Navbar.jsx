import React from 'react';
import icon from "../../assets/images/more/logo1.png"

const Navbar = () => {
    return (
        <div className='bg-[rgb(55,39,39)] py-4 flex gap-4 justify-center items-center'>
            <div className='max-w-[80px] flex justify-center items-center'>
                <img className='w-full' src={icon} alt={icon} />
            </div>
            <h1 className='text-3xl text-white font-semibold'>Espresso Emporium</h1>
        </div>
    );
};

export default Navbar;