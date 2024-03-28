// Importing necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing Bootstrap CSS and JS files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// Importing custom CSS file for additional styling
import './index.css';

// Importing Font Awesome CSS for icons
import 'font-awesome/css/font-awesome.min.css';

// Importing the main App component
import App from './App';

// Importing function for reporting web vitals
import reportWebVitals from './reportWebVitals';

// Importing the Redux store
import store from './redux/store';

// Importing Provider component from react-redux for Redux integration
import {Provider} from 'react-redux';

// Creating a root React element using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the root React element, wrapping the App component with Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Function for measuring performance in the app and reporting web vitals
reportWebVitals();
