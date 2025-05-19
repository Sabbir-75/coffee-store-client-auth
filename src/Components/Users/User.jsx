import React from 'react';
import Swal from 'sweetalert2';

const User = ({ singleData, index, userData, setUserData }) => {
    const { _id, name, email, address, phone, photo, } = singleData

    const deleteHandler = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainUserData = userData.filter(user => user._id !== id)
                            setUserData(remainUserData)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }
    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={photo}
                                alt={photo} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{address}</div>
                    </div>
                </div>
            </td>
            <td>
                {phone}
            </td>
            <td>{email}</td>
            <th>
                <button className="btn  bg-teal-500 hover:bg-teal-600 duration-200 text-white btn-xs">View</button>
                <button className="btn bg-blue-500 hover:bg-blue-600 duration-200 text-white btn-xs">Update</button>
                <button onClick={() => deleteHandler(_id)} className="btn bg-red-500 hover:bg-red-600 duration-200 text-white btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default User;