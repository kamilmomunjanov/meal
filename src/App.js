import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Product from "./components/Product/Product";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import './style.css'
import Category from "./components/Category/Category";
import Meal from "./components/Meal/Meal";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import Layout from "./Layout/Layout";

function App() {



  return (
    <div className="App">
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="category/:name" element={<Category/>}/>
                <Route path="category/:name/:id" element={<Meal/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
