import React, { useState } from "react";
import "./style.css";
import { FaBars } from "react-icons/fa";
import img from "../../assets/icons/shopping icon.png";
import SideBar from "../SideBar";

function SubHeader() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <React.Fragment>
      <div className="sub-cont">
        <button className="button" variant="primary">
          <FaBars onClick={handleShow} className="icon" /> All
        </button>
        <ul className="list">
          <li>Amazon miniTV</li>
          <li>Sell </li>
          <li>Best Seller</li>
          <li>Today's Deal</li>
          <li>Mobile </li>
          <li>Customer Service</li>
          <li>Electronics</li>
          <li>New Release</li>
          <li>Prime</li>
          <li>Home And Kitchen</li>
          <li>Fashion</li>
          <li>Gift Idea</li>

          <img style={{ marginLeft: "2%" }} src={img} alt="image" />
          <li>Shopping made easy download the app</li>
        </ul>
      </div>
      <SideBar
        show={show}
        setShow={setShow}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </React.Fragment>
  );
}
export default SubHeader;
