import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


export default function Login() {
    
    
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/teacher/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.teacherResult.token)
            localStorage.setItem('_id',json.teacherResult._id);
            toast.success('Welcome Teacher', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
            navigate('/home');
        } else {
            toast.error('Invalid Details', {
                position: "top-right",
                autoClose: 3000,
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
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" value={credentials.email} onChange={onChange} id="email" type="email" name='email' placeholder="name@example.com" />
                                        <label>Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="password" value={credentials.password} onChange={onChange} type="password" name='password' placeholder="Password" />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <Link className="small" to="/forgotpass">Forgot Password?</Link>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <Link className="small" to="/signup">Don't have an Account?  Signup</Link>
                                        <button className="btn btn-primary" type='submit' >Login</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
