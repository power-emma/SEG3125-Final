import React, { Component } from "react";
import './Home.css'
import { Outlet, Link } from "react-router-dom";

class CartPage extends Component{
    render() {
        return (
                

            <div className="Home">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8" style={{textAlign: "left"}}>
                        <h1>
                            <b>Help with Choosing Components and Building your PC</b>
                        </h1>
                        <h1>
                        When selecting a CPU and motherboard combination, there are several factors to consider.
                        </h1>
                        <h1>
                        Compatibility is key. Ensure that the CPU socket type matches the motherboard socket. More Specifically, AMD CPUs are only compatible with AMD Motherboards, and Intel CPUs are only compatible with Intel Motherboards
                        </h1>
                        <h1>
                        Think about your intended use case: gaming, content creation, or general productivity. Different CPUs excel in various tasks, so choose one that aligns with your needs. 
                        </h1>
                        <h1>
                        Consider features like overclocking support, and expansion slots on the motherboard, howeber these may not be critical to many users
                        </h1>
                        <h1>
                        When actually building your PC, the task may be more daunting than it seems. A common comparison is that building a PC is very similar to building a LEGO set. As for the instructions, it is best to follow along with one of many Video tutorials, so that you can see exactly what goes where and see a first hand account of what is to come next
                        </h1>
                        <h1>
                        If you get stuck, feel free to contact our team and we will help diagnose your issue
                        </h1>
                        <h1>
                        Below are a few recommended video tutorials
                        </h1>
                    <Link to="https://www.youtube.com/watch?v=s1fxZ-VWs2U">
                        <h1> How to Build a PC, the last guide you’ll ever need! (Linus Tech Tips)</h1>  
                    </Link>

                    <Link to="https://www.youtube.com/watch?v=PXaLc9AYIcg">
                        <h1> How To Build A PC - Step by Step (TechSource)</h1>  
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartPage;
