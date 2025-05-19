import React, { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {

    const { createAccount } = use(AuthContext)

    const SignupHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const { email, password, ...rest } = Object.fromEntries(formData.entries())

        createAccount(email, password).then(result => {
            console.log(result.user);
            const userProfile = {
                email,
                ...rest,
                creationTime: result.user?.metadata?.creationTime,
                lastSignInTime: result.user?.metadata?.lastSignInTime
            }
            fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userProfile)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className="hero mt-10">
            <div className="card bg-base-100 w-full border-[#372727] border-[2px] max-w-lg shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-center mb-5">Signup now!</h1>
                    <form onSubmit={SignupHandler} className="fieldset">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div>
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />
                            </div>
                            <div>
                                <label className="label">Address</label>
                                <input type="text" name='address' className="input" placeholder="Address" />
                            </div>
                            <div>
                                <label className="label">Phone</label>
                                <input type="number" name='phone' className="input" placeholder="Phone" />
                            </div>
                            <div>
                                <label className="label">Photo</label>
                                <input type="text" name='photo' className="input" placeholder="photo" />
                            </div>
                            <div>
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                            </div>
                            <div>
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                            </div>

                        </div>
                        <button type='submit' className="btn text-white bg-[#372727] mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;