import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main-page">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/sign-up" element={<Si />} /> */}

          <Route path="/login" element={<Login />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
