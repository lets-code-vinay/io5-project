import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import AllProducts from "./Pages/AllProducts/AllProducts.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Sidebar from "./components/sidebar/index.jsx";
import SubHeader from "./components/SubHeader";
import Header from "./components/Header";

function App() {
  return (
    <div className="main-page">
      <Header />
      <SubHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/Sidebar" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
