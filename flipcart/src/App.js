import './App.css';
import './components/custom.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header, Navbar, Home, ViewProductDetails, Cart } from './components';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export function App() {

  const [ViewDetailProduct, setViewDetailProduct] = useState();
  
let detailedProduct;
  const onViewDetailClick = (product) => {
    setViewDetailProduct(product)
  }
  const onAddToCartClick = (product) => {
    detailedProduct = product;
  }
  // console.log(SelectedProduct);
  // console.log(cartedProduct)
  return (
    <Router>
        <Header  />
        <Navbar />
      <Routes>
        <Route path="/" element={<Home onViewDetailClick={onViewDetailClick} onAddToCartClick={onAddToCartClick}/>} />
        <Route path="/ProductDetail" element={<ViewProductDetails data={detailedProduct} />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}


