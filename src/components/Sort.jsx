import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../redux/action';

// Functional component for sorting products
const Sort = () => {
    // Accessing products state from Redux store
    const products = useSelector((state) => state.products);
    // Initializing useDispatch hook to dispatch actions
    const dispatch = useDispatch();

    // Function to handle sorting products by price
    function handleSort() {
        if (!Array.isArray(products)) {
            console.error("Products is not an array."); // Log error if products is not an array
            return;
        }

        // Sort products from lowest price to highest price
        const sortedData = products
            .slice() // Create a shallow copy of the products array
            .filter(item => typeof item.price === 'number') // Filter out items without a valid price
            .sort((a, b) => (a.price || 0) - (b.price || 0)); // Sort by price, handling cases where price might be missing or not a number

        // Dispatch the sorted products to Redux state using the updateProduct action
        dispatch(updateProduct(sortedData)); // Dispatch sorted products to Redux state
        console.log("Sorted Products Dispatched to Redux State");
    }

    return (
        <div className="mb-3">
            {/* Button to trigger sorting */}
            <button onClick={handleSort} className="btn btn-outline-dark">
                Sort by Price
            </button>
        </div>
    );
};

export default Sort;
