import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
// import Sidebar from "../../components/Sidebar/index";
// import Sidebar from "../../components/sidebar/SubSideBar/index";
import SideBar from "../../components/SideBar/index";
import Footer from "../../components/Footer";

function About() {
  return (
    <React.Fragment>
      <Header />
      <SubHeader />
      <SideBar />
      <h1>About page testing</h1>
      <Footer />
    </React.Fragment>
  );
}

export default About;
