// Importing necessary modules from React and react-router-dom
import React from 'react';
import { NavLink } from 'react-router-dom';

// Functional component representing a button to add a new product
const AddProductBtn = () => {
  return (
    <div>
      {/* Using NavLink for navigation to the Add Product page */}
      <NavLink to="/add-product" className="btn btn-outline-dark ms-2">
        {/* Adding a plus icon */}
        <i className="fa fa-plus me-2"></i>
        Add Product
      </NavLink>
    </div>
  )
}

// Exporting the AddProductBtn component as default
export default AddProductBtn;
