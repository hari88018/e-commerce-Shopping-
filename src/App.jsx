import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";

import ProductsList from './Pages/ProductsList';
import Home from "./Pages/Home/Home"
import Product from './Pages/Product';
import Register from './Pages/Register/Register';
import Signin from './Pages/SignIn/Signin';
import Cart from './Pages/CART/Cart';
import ResetPassword from './Pages/ResetPassword/ResetPassword';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>

        

      
      </Routes>
    </>
  )
}

export default App
