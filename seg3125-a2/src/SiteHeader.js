import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { useTranslation} from 'react-i18next';
import { changeLanguage } from "i18next";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

let language = "en"

const SiteHeader = () => {
    const { t, i18n } = useTranslation();

    const swapLanguage = () => {
        if (language == "en") {
            i18n.changeLanguage('fr');
            language = "fr"
        } else {
            i18n.changeLanguage('en');
            language = "en"
        }
    }


        return (
            <div className = "row " style={{backgroundColor: "#440000"}}>
                <div className = "col p-4" style={{display: "flex", alignItems: "center"}}>
                    <h1 style={{color: "#FFFFFF"}}>E Computer Design</h1>
                </div>
                <div className = "col" style={{textAlign: "right"}}>
                        <Link to="/">
                            <a class = "btn-lg p-2" style={{color: "#FFFFFF", fontSize : "45pt"}} >{t("header.home")}</a>
                        </Link>
                        <Link to="/ProductPage">
                        
                        <a class = "btn-lg p-2" style={{color: "#FFFFFF", fontSize : "45pt"}}  >{t("header.products")}</a>
                        </Link>
                        <Link to="/Expert">
                            <a class = "btn-lg p-2" style={{color: "#FFFFFF", fontSize : "45pt"}}  >{t("header.expert")}</a>
                        </Link>
                        <Link to="/Learn">
                            <a class = "btn-lg p-2" style={{color: "#FFFFFF", fontSize : "45pt"}}  >{t("header.learn")}</a>
                        </Link>
                        <Link to="/Cart">
                            <a class = "btn-lg p-2" style={{color: "#FFFFFF", fontSize : "45pt"}}  >{t("header.cart")}</a>
                        </Link>
                        <Link onClick={() => swapLanguage("fr")}>
                            <a class = "btn-lg p-2" style={{color: "#FFFFFF", fontSize : "20pt"}}  >FR/EN</a>
                        </Link>
                </div>
            </div>
        )

    
}

export default SiteHeader;