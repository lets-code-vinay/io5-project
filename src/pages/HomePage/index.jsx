import React from "react";
import "./Style.css";
import Header from "../../components/Header/index.jsx";
import SubHeader from "../../components/SubHeader/index.jsx";
import SideBar from "../../components/SideBar/index.jsx";
import Carousel from "../../components/Carousel/index.jsx";
import ProductList from "../../components/ProductList/index.jsx";
import ProductView from "../../components/ProductView/index.jsx";
import SubSideBar from "../../components/SideBar/SubSideBar/index.jsx";
function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <SubHeader />
      <SideBar />
      <SubSideBar />
      <Carousel />
      <ProductView />
      <ProductList />
      <ProductView />
      <ProductList />
    </React.Fragment>
  );
}

export default HomePage;
