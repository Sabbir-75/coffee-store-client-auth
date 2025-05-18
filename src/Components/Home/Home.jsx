import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Coffee from '../Coffee';
import CoffeePic from './CoffeePic';
import "./Hero.css"

const fetchData = fetch("/coffeePic.json").then(res => res.json())

const Home = () => {
    const useData = use(fetchData)
    const coffeesData = useLoaderData()

    const [coffees, setCoffees] = useState(coffeesData)
    return (
        <>
            <div className='w-full heroBg py-[140px] mb-10 md:flex md:justify-between'>
                <div className='hidden md:block'></div>
                <div className='max-w-[700px] mt-1 md:mt-30 space-y-3'>
                    <h1 className='text-white text-3xl font-bold'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-white text-sm font-medium'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <div className='mb-3'>
                        <Link to={"/addcoffee"}><button className='px-4 py-2 text-lg cursor-pointer text-[#242222] rounded-sm bg-[#E3B577] font-bold border-2 border-[#331A15]'>Learn More</button></Link>
                    </div>
                </div>
            </div>
            <div className='max-w-[1100px] mx-auto'>
                <div>
                    <h1 className='text-lg text-black font-normal text-center'>--- Sip & Savor ---</h1>
                    <h1 className='text-4xl text-[#331A15] mb-4 font-bold text-center'>Our Popular Products</h1>

                    <div className='text-center mb-3'>
                        <Link to={"/addcoffee"}><button className='px-4 py-2 text-lg cursor-pointer text-white rounded-sm bg-[#E3B577] font-bold border-2 border-[#331A15]'>Add Coffee</button></Link>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        {
                            coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Coffee>)
                        }
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='text-lg text-black font-normal text-center'>Follow Us Now</h1>
                    <h1 className='text-4xl text-[#331A15] mb-4 font-bold text-center'>Follow on Instagram</h1>
                    <div className='px-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                        {
                            useData.map(data => <CoffeePic key={data.id} data={data}></CoffeePic>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;