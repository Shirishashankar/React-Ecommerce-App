// Importing necessary modules from React
import React from 'react';

// Importing the Product component
import Product from './Product';

// Functional component representing the Home page
const Home = () => {
  return (
    <div className="hero"> {/* Container for hero section */}
      <div className="card bg-dark text-white border-0"> {/* Card container with dark background */}
        <img src="/assets/home.png" className="card-img-top" alt="Background" height="500px" /> {/* Background image */}
      </div>
      {/* Rendering the Product component */}
      <Product/>
    </div>
  )
}

// Exporting the Home component as default
export default Home;
