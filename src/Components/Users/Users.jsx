import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const user = useLoaderData()
    const [userData, setUserData] = useState(user)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email Color</th>
                        <th>View/Update/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((singleData, index) => <User key={singleData._id} index={index} singleData={singleData} userData={userData} setUserData={setUserData}></User>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Users;