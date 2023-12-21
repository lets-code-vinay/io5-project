import React from "react";
import "./Style.css";
import Header from "../../components/Header/index.jsx";
import SubHeader from "../../components/SubHeader/index.jsx";
import Sidebar from "../../components/Sidebar/index.jsx";
import SubSideBar from "../../components/Sidebar/SubSideBar/index.jsx";
import Carousel from "../../components/Carousel/index.jsx";
import ProductList from "../../components/ProductList/index.jsx";
function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <SubHeader />
      <Sidebar />
      <SubSideBar />
      <Carousel />
      <ProductList />
    </React.Fragment>
  );
}

export default HomePage;
