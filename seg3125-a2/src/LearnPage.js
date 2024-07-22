import React, { Component } from "react";
import './Home.css'
import { Outlet, Link } from "react-router-dom";

class CartPage extends Component{
    render() {
        return (
                

            <div className="Home">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                    <h1>Assume this page is a fairly brief guide on how to choose compatible computer parts, aimed at being from an Expert to a Novice, in an informative tone.
                        This will be written in the final version,
                        For now reference this Youtube Video if you care to learn more
                    </h1>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <h1> Computer Building Guide 2024 (Linus Tech Tips)</h1>  
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartPage;
