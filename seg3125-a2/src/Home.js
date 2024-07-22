import React, { Component } from "react";
import './Home.css'
import SiteHeader from './SiteHeader';
import { Outlet, Link } from "react-router-dom";
import ryzenhero from './img/ryzenhero.webp'
import pcbuilder from './img/pcbuilder.png'
class Home extends Component{
    render() {
        return (
            
        <div className="Home">
            

            <body>

                <div className = "pt-5" style = {{backgroundImage: 'url(' + ryzenhero + ')', backgroundSize: "cover", backgroundPosition: "0% 50%", height: "30rem" }}>
                    <div className = "h-100 d-flex justify-content-center align-items-center" >
                        <div className = "col-sm-3"> </div>

                        <div className = "col-sm-6 align-self-center" >
                            <h1 style={{color: "white", background: "black"}}><b>New! </b>AMD Ryzen 9000 Series CPUs</h1>
                            <h3 style={{color: "white", background: "black"}}>The fastest desktop processors on the market</h3>
                            <Link to="/ProductPage">
                                <a class = "btn btn-primary btn-large " style={{backgroundColor: "#D3432D"}} >Browse AMD Products</a>
                            </Link>
                        </div>

                        <div className = "col-sm-3"> </div>
                    </div>
                </div>

                <div className = "pt-5" style = {{backgroundImage: 'url(' + pcbuilder + ')', backgroundSize: "cover", backgroundPosition: "0% 50%", height: "30rem" }}>
                    <div className = "h-100 d-flex justify-content-center align-items-center" >
                        <div className = "col-sm-3"> </div>

                        <div className = "col-sm-6 align-self-center" >
                            <h1 style={{color: "white", background: "black"}}>Have our experts do the work for you</h1>
                            <h3 style={{color: "white", background: "black"}}>We can design and build a computer specifically for your needs</h3>
                            <Link to="/Expert">
                                <a class = "btn btn-primary btn-large " style={{backgroundColor: "#D3432D"}} >Consult our Experts</a>
                            </Link>
                        </div>

                        <div className = "col-sm-3"> </div>
                    </div>
                    
                </div>
            </body>
        </div>
        );
    }
}

export default Home;
