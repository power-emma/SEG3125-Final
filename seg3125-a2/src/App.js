import React from "react";
import * as ReactDOM from 'react-dom';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";

import SiteHeader from "./SiteHeader";
import ProductPage from "./ProductPage";
import Expert from "./Expert";
import Learn from "./LearnPage";
import Cart from "./CartPage";
import CartCard from "./CartCard";
import { CartProvider } from "./CartContext";
import { useEffect, useState } from "react";
import HomeFR from "./HomeFR";
import { Suspense } from 'react';
import { useTranslation} from 'react-i18next';


const App = () => {
    const { t, i18n } = useTranslation();
    return (

    <div>
      <CartProvider>
        <HashRouter>
              <SiteHeader/>
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/ProductPage" exact element={<ProductPage/>} />
              <Route path="/Expert" exact element={<Expert/>} />
              <Route path="/Learn" exact element={<Learn/>} />
              <Route path="/Cart" exact element={<Cart/>} />

            </Routes>
        </HashRouter>
      </CartProvider >
    </div>
    );
  }

  export default function WrappedApp() {
    return (
      <Suspense fallback="...loading">
        <App />
      </Suspense>
    )
  }
