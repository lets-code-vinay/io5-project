import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp/index.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import AllProducts from "./Pages/AllProducts/AllProducts.jsx";
import Login from "./components/Login/index.jsx";
import CartPage from "./Pages/CartPage/index.jsx";
import ProductDetail from "./pages/ProductDetail/product.jsx";

function App() {
  return (
    <div className="main-page">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
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
