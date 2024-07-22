import React, { Component, useContext } from "react";
import './Home.css'
import CartCard from "./CartCard";
import productData from './products.json';
import { Outlet, Link } from "react-router-dom";
import CartContext from "./CartContext";

const CartPage = () => {
    const { cart, dispatch } = useContext(CartContext);

    const handleRemoveFromCart = (itemId) => {
      dispatch({ type: "REMOVE_ITEM", payload: itemId });
    };
  
    return (
      <div>
        <h2>
          Shopping Cart
        </h2>
        {cart.map((product) => (
          <div className='row'>
          <div className=''> 
              <div className = "" style = {{display: "flex", textAlign: "center", verticalAlign: "middle"}}> 
                  <img  src={require("./img/products/" + product.img)} alt="Logo" style={{width:"20%"}} /> 
                  <h1 className = "p-5" style = {{fontSize: "44pt"}}>{product.name}</h1> 
                  <h1 className = "p-5" style = {{fontSize: "44pt"}}>${product.price}</h1>
                  
              </div>
              <button className="btn btn-primary" type="button" onClick={() => handleRemoveFromCart(product.id)} >
                      Remove from Cart 
                  </button>
          </div>
      </div>
        ))}
      </div>
    );
}


export default CartPage;
