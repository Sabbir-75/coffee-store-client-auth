import React from 'react';
import { useLoaderData } from 'react-router';

const Coffeedetails = () => {
    const singleData = useLoaderData()
    console.log(singleData);
    return (
       <div className='bg-[#F5F4F1] mt-10 max-w-[600px] mx-auto rounded-lg p-8 flex justify-between items-center'>
            <div className='max-w-[185px] flex justify-center items-center'>
                 <img src={singleData.Photo} alt={singleData.Photo} />
            </div>
            <div>
                <h1 className='text-lg font-semibold text-[#1B1A1A]'>Name: <span className='text-[#5C5B5B] font-normal'>{singleData.name}</span></h1>
                <h1 className='text-lg font-semibold text-[#1B1A1A]'>Quantity: <span className='text-[#5C5B5B] font-normal'>{singleData.quantity}</span></h1>
                <h1 className='text-lg font-semibold text-[#1B1A1A]'>Supplier: <span className='text-[#5C5B5B] font-normal'>{singleData.Supplier}</span></h1>
                <h1 className='text-lg font-semibold text-[#1B1A1A]'>Category: <span className='text-[#5C5B5B] font-normal'>{singleData.Category}</span></h1>
                <h1 className='text-lg font-semibold text-[#1B1A1A]'>Taste: <span className='text-[#5C5B5B] font-normal'>{singleData.Taste}</span></h1>
                <h1 className='text-lg font-semibold text-[#1B1A1A]'>Details: <span className='text-[#5C5B5B] font-normal'>{singleData.Details}</span></h1>
            </div>
        </div>
    );
};

export default Coffeedetails;