// Importing necessary modules from React and react-router-dom
import React from 'react';
import { NavLink } from 'react-router-dom';

// Functional component representing a button to navigate to the Cart page
const CartBtn = () => {
  return (
    <>
      {/* Using NavLink for navigation to the Cart page */}
      <NavLink to="/cart" className="btn btn-outline-dark ms-2">
        {/* Adding a shopping cart icon */}
        <span className="fa fa-shopping-cart me-2"></span>
        Cart
      </NavLink>
    </>
  )
}

// Exporting the CartBtn component as default
export default CartBtn;
