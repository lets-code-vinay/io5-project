import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Sidebar from "../../components/Sidebar/index";
function About() {
  return (
    <React.Fragment>
      <Header />
      <SubHeader />
      <Sidebar />
      <h1>About page testing</h1>
    </React.Fragment>
  );
}

export default About;
