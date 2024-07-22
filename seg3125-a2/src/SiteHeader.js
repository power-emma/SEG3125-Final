import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

class SiteHeader extends Component{
    render() {
        return (
            <div className = "row " style={{backgroundColor: "#440000"}}>
                <div className = "col p-4" style={{display: "flex", alignItems: "center"}}>
                    <h1 style={{color: "#FFFFFF"}}>E Computer Design</h1>
                </div>
                <div className = "col" style={{textAlign: "right"}}>
                        <Link to="/">
                            <a class = "btn-lg p-2" style={{color: "#FFFFFF", fontSize : "45pt"}} >Home</a>
                        </Link>
                        <Link to="/ProductPage">
                        
                        <a class = "btn-lg p-2" style={{color: "#FFFFFF", fontSize : "45pt"}}  >Products</a>
                        </Link>
                        <Link to="/Expert">
                            <a class = "btn-lg p-2" style={{color: "#FFFFFF", fontSize : "45pt"}}  >Expert</a>
                        </Link>
                        <Link to="/Learn">
                            <a class = "btn-lg p-2" style={{color: "#FFFFFF", fontSize : "45pt"}}  >Learn</a>
                        </Link>
                        <Link to="/Cart">
                            <a class = "btn-lg p-2" style={{color: "#FFFFFF", fontSize : "45pt"}}  >Cart</a>
                        </Link>
                </div>
            </div>
        )

    }
}

export default SiteHeader;