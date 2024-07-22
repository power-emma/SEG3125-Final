import React, { Component, useContext, useState, useEffect } from "react";
import './Home.css'
import CartCard from "./CartCard";
import productData from './products.json';
import { Outlet, Link } from "react-router-dom";
import CartContext from "./CartContext";

const CartPage = () => {
    const { cart, dispatch } = useContext(CartContext);
    const [info, setInfo] = useState();

    const handleRemoveFromCart = (itemId) => {
      dispatch({ type: "REMOVE_ITEM", payload: itemId });
      setInfo(cartStats())
    };
    
    
    const cartStats = () => {
      let subtotal = 0;
      let tax = 0
      let total = 0;
      let missingComponents = ["CPU", "MBD", "RAM", "GPU", "PSU", "STORE", "CASE", "COOL"]
      let missingComponentsFullName = ["CPU", "Motherboard", "Memory", "Graphics Card", "Power Supply", "Storage", "Case", "Cooling"]

      let bottleneck = "";
      let compIssue = "No Issues";

      let CPU = [];
      let GPU = [];
      let RAM = [];

      let amdFound = false;
      let intelFound = false;

      for(let i in cart) {
        let tempobj = cart[i]

        console.log(tempobj)
        for (let j in missingComponents) {
          let component = missingComponents[j]


          
          if (tempobj.categories.includes(component)) {
            let index = missingComponents.indexOf(component);
            if (index !== -1) {
              missingComponents.splice(index, 1);
              missingComponentsFullName.splice(index, 1);
            }
            console.log(true)
          }
        }
        if (tempobj.categories.includes("MBD") || tempobj.categories.includes("CPU")) {
          if (tempobj.categories.includes("Intel") ) {
            intelFound = true;
          }
          if (tempobj.categories.includes("AMD") ) {
            amdFound = true;
          }
        }


        console.log("AMD" + amdFound);
        console.log("INTEL" + intelFound)
        

        if (tempobj.categories.includes("CPU")) {
          CPU = tempobj
        }
        if (tempobj.categories.includes("GPU")) {
          GPU = tempobj
        }
        if (tempobj.categories.includes("RAM")) {
          RAM = tempobj
        }
        
        subtotal += tempobj.price
      }

      if (missingComponents.length > 0) {
        bottleneck = "Incomplete System";
      } else {
        if (GPU.price > CPU.price + 150) {
          bottleneck = "CPU Bottleneck Found"
        } else if (CPU.price > GPU.price) {
          bottleneck = "GPU Bottleneck Found"
        } else if (CPU.price > RAM.price * 6 ) {
          bottleneck = "RAM Bottleneck Found"
        } else {
          bottleneck = "No Severe Bottlenecks Found"
        }

        if (intelFound && amdFound) {
          compIssue = "CPU and Motherboard Mismatch"
        }

      }

      subtotal = (Math.round(subtotal * 100) / 100).toFixed(2);

      tax = subtotal * 0.13
      tax = (Math.round(tax * 100) / 100).toFixed(2);

      total = subtotal * 1.13
      total = (Math.round(total * 100) / 100).toFixed(2);

      if (missingComponents.length == 0) {
        missingComponentsFullName = ["All Needed Components Found"]
      }
      
      console.log(subtotal)
      console.log(total)

      return (
        <div>
          <h3 className="p-3"> Bottlenecks: {bottleneck}</h3>
          <h3 className="p-3"> Compatibility Issues: {compIssue}</h3>
          <h3 className="p-3"> Missing Components:</h3>
          {missingComponentsFullName.map((comp, index) => (
                    <h3 className = "">{comp}</h3>
          ))}
          <h3 className="p-3"> Subtotal: ${subtotal}</h3>
          <h3 className="p-3"> Tax: ${tax} </h3>
          <h3 className="p-3"> Total: ${total}</h3>
        </div>
      )
    }
      // Runs only on first render
      useEffect(() => {
        setInfo(cartStats())
      }, []);

    

    return (
      
      <div >
        <div className = "row"> 
          
          <div className="col-sm-9">
          {cart.map((product) => (
            <div className=''>
              <div className=''> 
                  <div className = "row" style = {{display: "flex", textAlign: "center", verticalAlign: "middle"}}> 
                      <div className="col-sm-3">
                        <img  src={require("./img/products/" + product.img)} alt="Logo" style={{width:"100%"}} /> 
                      </div>
                      <div className="col-sm-5">
                      <h1 className = "p-5" style = {{fontSize: "44pt"}}>{product.name}</h1> 
                      </div>
                      <div className="col-sm-2">
                      <h1 className = "p-5" style = {{fontSize: "44pt"}}>${product.price}</h1>
                      </div>
                      <div className="col-sm-1">
                      <a className="p-5" type="" onClick={() => handleRemoveFromCart(product.id)} style={{justifyContent: "flex-end"}}>
                        <img src={require("./img/delete.png")} alt="Logo" style={{width:"10rem"}} />
                      </a>
                      </div>
                  </div>
                  
              </div>

          
            </div>
          ))}
          </div>
          <div className='col-sm-3' style={{backgroundColor: "#440000", color: "#FFFFFF", textAlign: "center"}}>
          <ui className = "row">{info}</ui>


          </div>
        </div>
      </div>
      
    );
}


export default CartPage;
