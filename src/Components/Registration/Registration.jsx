import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Registration() {
    const [credentials, setCredentials] = useState({ name: "", phone: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, phone, email, password, cpassword } = credentials;
        if (password === cpassword) {

            const response = await fetch("http://localhost:4000/api/teacher/createteacher", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, email, password })
            });
            const json = await response.json();
            console.log(json)
            // alert("Account Create Successfuly")
            toast.success('Account Create Successfuly', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });
            navigate('/');

        } else {
            // alert("password and Confirm Password not match")
            toast.error('Password and Confirm Password not match', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>

                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input className="form-control" name='name' id="name" onChange={onChange} type="text" minLength={3} placeholder="Enter your first name" />
                                                <label htmlFor="inputFirstName">Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input className="form-control" name='phone' id="phone" onChange={onChange} type="numbers" maxLength={10} placeholder="Phone Number" />
                                                <label htmlFor="inputLastName">Phone</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" type="email" name='email' id="email" onChange={onChange} placeholder="name@example.com" />
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input className="form-control" name='password' id="password" onChange={onChange} minLength={6} type="password" placeholder="Create a password" />
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input className="form-control" name='cpassword' id="cpassword" onChange={onChange} minLength={6} type="password" placeholder="Confirm password" />
                                                <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 mb-0">
                                        <div className="d-grid"><button className="btn btn-primary" type='submit' >Create Account</button></div>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div className="small"><Link to="/">Have an account? Go to login</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
