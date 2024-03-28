// Importing CSS file for styling
import './App.css';

// Importing necessary modules from React and react-router-dom
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components used in the application
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import Sort from './components/Sort';

// Functional component representing the main App
function App() {
  return (
    // Wrapping the entire app with BrowserRouter
    <Router>
      {/* Rendering Header component */}
      <Header />
      {/* Defining routes using Routes component */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Route for displaying all products */}
        <Route path="/products" element={<Product />} />
        {/* Route for displaying individual product details */}
        <Route path="/products/:id" element={<ProductDetail />} />
        {/* Route for adding a new product */}
        <Route path="/add-product" element={<AddProduct/>} />
        {/* Route for displaying the shopping cart */}
        <Route path="/cart" element={<Cart />} />
        {/* Route for sorting products */}
        <Route path="/sort" element={<Sort />} />
      </Routes>
      {/* Rendering Footer component */}
      <Footer />
    </Router>      
  );
}

// Exporting the App component as default
export default App;
