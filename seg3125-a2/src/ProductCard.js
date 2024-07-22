import React, { Component, useContext } from "react";
import CartContext from "./CartContext";



const ProductCard = (obj) => {
    const { dispatch } = useContext(CartContext);

    const handleAddToCart = (product) => {
      dispatch({type: "ADD_ITEM", payload: product });
    };
    
    console.log(obj.obj)
    let pro = obj.obj
    return (
        <div className = "col-sm-4 text-center"> 
            <img src={require("./img/products/" + pro.img)} alt="Logo" style={{width:"90%"}} />;
            <h1>{pro.name}</h1> 
            <h1>${pro.price}</h1>
            
            <a class = "btn btn-primary btn-large " style={{backgroundColor: "#D3432D"}} onClick={() => handleAddToCart( pro)} >Add to Cart</a>
        </div>
    )
}



export default ProductCard;