// Importing necessary modules from React

import React from 'react';

// Functional component representing a login button and modal

const Login = () => {
    return (
        <>
            {/* Button to trigger the login modal */}
            <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className='fa fa-sign-in me-2' ></span> {/* Sign in icon */}
                Login
            </button>

            {/* Modal for login */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="loginModalLabel">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Login form */}
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-dark w-100">Submit</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

// Exporting the Login component as default

export default Login;
