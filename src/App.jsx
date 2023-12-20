import React from "react";
import "./App.css";
import SubHeader from "./components/SubHeader";
import Header from "./components/Header";
// import Login from "../src/components/Login/index.jsx";
import Signup from "./components/signup/index.jsx";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SubHeader />
      {/* <Login />; */}
      <Signup />
    </React.Fragment>
  );
}

export default App;
