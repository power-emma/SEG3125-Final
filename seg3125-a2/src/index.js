import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Home from './Home';
import ProductPage from './ProductPage';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<ProductPage />, document.getElementById("root"));