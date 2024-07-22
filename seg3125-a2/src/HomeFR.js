import React, { Component } from "react";
import './Home.css'
import SiteHeader from './SiteHeader';
import { Outlet, Link } from "react-router-dom";
import ryzenhero from './img/ryzenhero.webp'
import pcbuilder from './img/pcbuilder.png'
class HomeFR extends Component{
    render() {
        return (
            
        <div className="Home">
            

            <body>

                <div className = "pt-5" style = {{backgroundImage: 'url(' + ryzenhero + ')', backgroundSize: "cover", backgroundPosition: "0% 50%", height: "30rem" }}>
                    <div className = "h-100 d-flex justify-content-center align-items-center" >
                        <div className = "col-sm-3"> </div>

                        <div className = "col-sm-6 align-self-center" >
                            <h1 style={{color: "white", background: "black"}}><b>Nouveau! </b>Processeurs AMD Ryzen série 9000</h1>
                            <h3 style={{color: "white", background: "black"}}>Les processeurs de bureau les plus rapides du marché</h3>
                            <Link to="/ProductPage">
                                <a class = "btn btn-primary btn-large " style={{backgroundColor: "#D3432D"}} >Parcourir les produits AMD</a>
                            </Link>
                        </div>

                        <div className = "col-sm-3"> </div>
                    </div>
                </div>

                <div className = "pt-5" style = {{backgroundImage: 'url(' + pcbuilder + ')', backgroundSize: "cover", backgroundPosition: "0% 50%", height: "30rem" }}>
                    <div className = "h-100 d-flex justify-content-center align-items-center" >
                        <div className = "col-sm-3"> </div>

                        <div className = "col-sm-6 align-self-center" >
                            <h1 style={{color: "white", background: "black"}}>Laissez nos experts faire le travail pour vous</h1>
                            <h3 style={{color: "white", background: "black"}}>Nous pouvons concevoir et construire un ordinateur spécifiquement adapté à vos besoins</h3>
                            <Link to="/Expert">
                                <a class = "btn btn-primary btn-large " style={{backgroundColor: "#D3432D"}} >Consultez nos experts</a>
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

export default HomeFR;
