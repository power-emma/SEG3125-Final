import React, { Component } from "react";
import './Home.css'
import { Outlet, Link } from "react-router-dom";
import './Expert.css'

class Expert extends Component{
    render() {
        return (
                
            <div className="Home">

                <body>
                    <h1> Expert Recommendations</h1>
                    
                    <div className = "p-5 row" >
                        <div className = "p-5 col-sm-5 "style={{backgroundColor: "#CCCCCC"}}>
                            <h1> Contact an Expert</h1>
                            <h5>Answer some questions about your needs and an expert will recommend our best products in your price range</h5>
                            <div className = "pt-3">
                                <label for="name" class="form-label">Name:</label>
                                <input type="" class="form-control" id="name" placeholder="Enter Name" name="name"/>
                            </div>
                            <div className = "pt-3">
                                <label for="name" class="form-label">Address:</label>
                                <input type="" class="form-control" id="name" placeholder="Enter Address" name="name"/>
                            </div>
                            <div className = "pt-3">
                                <label for="name" class="form-label">What will you be using this computer for:</label>
                                <input type="" class="form-control" id="name" placeholder="Enter Address" name="name"/>
                            </div>
                            <div className = "pt-3">
                                <label for="name" class="form-label">What is your estimated Budget:</label>
                                <input type="" class="form-control" id="name" placeholder="Enter Address" name="name"/>
                            </div>
                            <div className = "pt-3">
                                <label for="name" class="form-label">Do you need any peripherals such as a monitor, keyboard, mouse or other such item</label>
                                <input type="" class="form-control" id="name" placeholder="Enter Address" name="name"/>
                            </div>
                            <div className = "pt-3">
                                <label for="name" class="form-label">If you have any extra details or requests, leave them here</label>
                                <input type="" class="form-control" id="name" placeholder="Enter Address" name="name"/>
                            </div>
                            <div class="pt-3" >
                                <button type="button" class="btn btn-primary" style={{backgroundColor: "#5A642F; "}}>Send to Expert</button>
                            </div>
                        </div>
                        <div className = "p-5 col-sm-1 "> </div>
                        <div className = "p-5 col-sm-6 "style={{backgroundColor: "#CCCCCC"}}>
                            
                            <h1><b>New!</b> Pick one of these popular games and get a capable computer at a good price</h1>
                            <div className = "p-5 row" >
                                <div className = " col-sm-4 "style={{backgroundColor: "#CCCCCC"}}> 
                                    <img src={require("./img/gamelogo/cs.png")} alt="Logo" style={{width:"100%"}} />
                                </div>
                                <div className = " col-sm-4 "style={{backgroundColor: "#CCCCCC"}}> 
                                    <img src={require("./img/gamelogo/val.png")} alt="Logo" style={{width:"100%"}} />
                                </div>
                                <div className = " col-sm-4 "style={{backgroundColor: "#CCCCCC"}}> 
                                    <img src={require("./img/gamelogo/eldenring.webp")} alt="Logo" style={{width:"100%"}} />
                                </div>
                                <div className = " col-sm-4 "style={{backgroundColor: "#CCCCCC"}}> 
                                    <img src={require("./img/gamelogo/gta5.png")} alt="Logo" style={{width:"100%"}} />
                                </div>
                                <div className = " col-sm-4 "style={{backgroundColor: "#CCCCCC"}}> 
                                    <img src={require("./img/gamelogo/lol.png")} alt="Logo" style={{width:"100%"}} />
                                </div>
                                <div className = " col-sm-4 "style={{backgroundColor: "#CCCCCC"}}> 
                                    <img src={require("./img/gamelogo/cod.jpg")} alt="Logo" style={{width:"100%"}} />
                                </div>
                            </div>
                        </div>

                    </div>
                </body>

            </div>
        );
    }
}

export default Expert;
