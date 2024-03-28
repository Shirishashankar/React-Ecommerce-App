// Importing necessary modules from React
import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Sort from './Sort';

// Functional component for displaying products
const Product = () => {
  // State to hold the fetched data
  const [data, setData] = useState([]);
  // State to hold filtered data
  const [filter, setFilter] = useState(data);
  // State to manage loading state
  const [loading, setLoading] = useState(false);
  // Ref to track component mounting
  let componentMounted = useRef(true);

  // Effect to fetch data when component mounts
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true); // Set loading state to true
      // Fetch data from API
      const response = await fetch("https://my-json-server.typicode.com/Shirishashankar/storedata/products");
      if (componentMounted.current) { // Check if component is still mounted
        setData(await response.clone().json()); // Set data
        setFilter(await response.json()); // Set filtered data
        setLoading(false); // Set loading state to false
      }
      return () => {
        componentMounted.current = false; // Cleanup function to update componentMounted ref
      }
    }
    getProducts(); // Invoke the function to fetch products
  }, []); // Dependency array to run effect only once on mount

  // Component for displaying loading indicator
  const Loading = () => {
    return (
      <>
        Loading... {/* Loading indicator */}
      </>
    )
  }

  // Function to filter products based on category
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  // Component to display products
  const ShowProduct = () => {
    return (
      <>
        {/* Buttons to filter products */}
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('fragrances')}>Fragrance</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('skincare')}>Skincare</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('womens-watches')}>Watches</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('womens-bags')}>Handbags</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('womens-jewellery')}>Jewellery</button>
        </div>
        {/* Display filtered products */}
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4" key={product.id}>
                <img src={product.thumbnail} class="card-img-top" alt={product.title} height="250px" />
                <div class="card-body">
                  <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                  <p class="card-text lead fw-bolder">${product.price} </p>
                  <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  }

  // Rendering the component
  return (
    <div>
      {/* Container for products */}
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1> {/* Title */}
            <hr /> {/* Horizontal line */}
          </div>
          <div className="col-12">
            {/* Component for sorting products */}
            <Sort/>
          </div>
        </div>
        {/* Display products or loading indicator */}
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  )
}

// Exporting the Product component
export default Product;
