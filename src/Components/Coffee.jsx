import React from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees, setCoffees }) => {

    const deleteHandler = (id) => {
        Swal.fire({
            title: "Are you sure ?",
            text: "Are you sure that you want to delete it?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingData = coffees.filter(singlecoffee => singlecoffee._id !== id)
                            setCoffees(remainingData)
                            Swal.fire({
                                title: "Good Luck !!!",
                                text: "Deleted coffee details",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='bg-[#F5F4F1] rounded-lg p-8 flex justify-between items-center'>
            <div className='max-w-[185px] flex justify-center items-center'>
                <img src={coffee.Photo} alt={coffee.Photo} />
            </div>
            <div>
                <h1 className='text-lg font-semibold text-[#1B1A1A]'>Name: <span className='text-[#5C5B5B] font-normal'>{coffee.name}</span></h1>
                <h1 className='text-lg font-semibold text-[#1B1A1A]'>Quantity: <span className='text-[#5C5B5B] font-normal'>{coffee.quantity}</span></h1>
                <h1 className='text-lg font-semibold text-[#1B1A1A]'>Supplier: <span className='text-[#5C5B5B] font-normal'>{coffee.Supplier}</span></h1>
            </div>
            <div className='space-y-4 grid grid-cols-1'>
                <NavLink to={`/detailscoffee/${coffee._id}`}><button className='text-white rounded-sm text-base px-2 py-1 bg-[#D2B48C]'>Details</button></NavLink>
                <NavLink to={`/updatecoffee/${coffee._id}`}><button className='text-white rounded-sm text-base px-2 py-1 bg-[#3C393B]'>Edit</button></NavLink>
                <button onClick={() => deleteHandler(coffee._id)} className='text-white text-lg rounded-sm px-2 base-1 bg-[#EA4744]'>Delete</button>
            </div>
        </div>
    );
};

export default Coffee;