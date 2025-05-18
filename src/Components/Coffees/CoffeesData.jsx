import React from 'react';
import { Link } from 'react-router';

const CoffeesData = () => {

    const formHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const newCoffeeData = Object.fromEntries(formData.entries())
        console.log(newCoffeeData);

        // newCoffeeData put to Database

        fetch("http://localhost:5000/coffees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCoffeeData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // form.reset()
                }
            })
    }
    return (

        <div className='max-w-[1100px] mx-auto rounded-lg px-[112px] py-[70px] space-y-8 bg-[#F4F3F0]'>
            <div className='text-center'>
                <Link to={"/"}><button className='px-4 py-2 text-lg cursor-pointer text-white rounded-sm bg-black font-bold'>Back to home</button></Link>
            </div>

            <h1 className='text-center text-5xl font-semibold text-[#374151]'>Add New Coffee</h1>
            <p className='max-w-[850px] mx-auto text-center text-base text-[#374151] font-normal'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={formHandler}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[#1B1A1A80] text-xl font-semibold">Name</legend>
                        <input name='name' type="text" className="input w-full text-base font-medium text-[#1B1A1A90] bg-white" placeholder="Enter coffee name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[#1B1A1A80] text-xl font-semibold">Quantity</legend>
                        <input name='quantity' type="text" className="input w-full text-base font-medium text-[#1B1A1A90] bg-white" placeholder="Enter coffee quantity" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[#1B1A1A80] text-xl font-semibold">Supplier</legend>
                        <input name='Supplier' type="text" className="input w-full text-base font-medium text-[#1B1A1A90] bg-white" placeholder="Enter coffee supplier" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[#1B1A1A80] text-xl font-semibold">Taste</legend>
                        <input name='Taste' type="text" className="input w-full text-base font-medium text-[#1B1A1A90] bg-white" placeholder="Enter coffee taste" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[#1B1A1A80] text-xl font-semibold">Category</legend>
                        <input name='Category' type="text" className="input w-full text-base font-medium text-[#1B1A1A90] bg-white" placeholder="Enter coffee category" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[#1B1A1A80] text-xl font-semibold">Details</legend>
                        <input name='Details' type="text" className="input w-full text-base font-medium text-[#1B1A1A90] bg-white" placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                <div className='mt-2'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[#1B1A1A80] text-xl font-semibold">Photo</legend>
                        <input name='Photo' type="text" className="input w-full text-base font-medium text-[#1B1A1A90] bg-white" placeholder="Enter photo URL" />
                    </fieldset>
                </div>
                <div className='mt-8'>
                    <input type="submit" className='text-xl cursor-pointer text-[#331A15] bg-[#D2B48C] rounded-[5px] py-3 w-full' value="Add Coffee" />
                </div>
            </form>

        </div>

    );
};

export default CoffeesData;