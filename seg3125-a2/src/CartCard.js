import React, { useContext, Component } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import useLocalStorageState from "use-local-storage-state";
import ProductPage from './ProductPage';
import CartContext from "./CartContext";



function CartCard(obj) {
    console.log(obj.obj)
    let product = obj.obj

    const { cart, dispatch } = useContext(CartContext);
  
    const handleRemoveFromCart = (itemId) => {
        console.log("REMOVING " + itemId)
        dispatch({ type: "REMOVE_ITEM", payload: itemId });
    };

    return (
        <div className='row'>
            <div className='col-sm-9'>
                
                <div className = "" style = {{display: "flex", textAlign: "center", verticalAlign: "middle"}}> 
                <img  src={require("./img/products/" + product.img)} alt="Logo" style={{width:"20%"}} /> 
                    <h1 className = "p-5" style = {{fontSize: "44pt"}}>{product.name}</h1> 
                    <h1 className = "p-5" style = {{fontSize: "44pt"}}>${product.price}</h1>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => handleRemoveFromCart(product.id)}
                    >
                        Remove from Cart 
                    </button>
                </div>
            </div>
        </div>
    )
}



export default CartCard;