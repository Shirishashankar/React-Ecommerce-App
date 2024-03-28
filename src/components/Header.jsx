// Importing necessary modules from React and react-router-dom
import React from 'react';
import { NavLink } from "react-router-dom";

// Importing custom components for buttons
import AddProductBtn from './buttons/AddProductBtn';
import Login from './buttons/Login';
import CartBtn from './buttons/CartBtn';

// Functional component representing the header/navbar of the application
const Header = () => {
    return (
        <div style={{ marginBottom: "20px" }}> {/* Styling for margin bottom */}
            <nav
                className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm" // Styling for the navbar
                style={{ height: "100px" }} // Setting the height of the navbar
            >
                <div className="container"> {/* Container for the navbar */}
                    {/* Brand/logo */}
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        <img
                            src="/lotion.png" // Image for logo
                            height="40px"
                            width="40px"
                            alt="icon"
                        />
                    </NavLink>
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        THE BEAUTY SHOP {/* Text logo */}
                    </NavLink>
                    {/* Toggle button for collapsed navbar on smaller screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Navbar links */}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> {/* Navbar items */}
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Products
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Custom buttons */}
                    <Login/> {/* Login button */}
                    <AddProductBtn/> {/* Add Product button */}
                    <CartBtn/> {/* Cart button */}

                </div>
            </nav>
        </div>
    )
}

// Exporting the Header component as default
export default Header;
