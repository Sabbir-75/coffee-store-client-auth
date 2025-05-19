import React, { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { signIn } = use(AuthContext)

    const SigninHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const password = form.password.value
        const email = form.email.value

        signIn(email, password)
            .then(result => {
                const updateUserInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }

                fetch("http://localhost:5000/users", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updateUserInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount) {
                            Swal.fire({
                                icon: "success",
                                title: "Your work has been saved and Update Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                });
            })
    }
    return (
        <div className="hero mt-10">
            <div className="card bg-base-100 w-full border-[#372727] border-[2px] max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-center mb-5">Login now!</h1>
                    <form onSubmit={SigninHandler} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn text-white bg-[#372727] mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;