import React from "react";
import Navbar from  './components/Navbar'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Products from "./components/Products";
import Product from "./components/Product";
function App() {
 return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
