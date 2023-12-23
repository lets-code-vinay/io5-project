import React from "react";
import "./style.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoIosContact } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
function SubSideBar(props) {
  const { isMenu, setMenu } = props;
  const handleMenuClose = () => {
    setMenu(false);
  };
  return (
    <>
      <Offcanvas show={isMenu} onHide={handleMenuClose}>
        <Offcanvas.Header className="title" closeButton>
          <Offcanvas.Title className="title-name">
            <IoIosContact className="contact" /> Hello,Sign in
          </Offcanvas.Title>
        </Offcanvas.Header>
        <div className="main-sect">
          <div onClick={handleMenuClose} className="menu">
            <FaArrowLeft className="sub-icon" />
            <h5>Main Menu</h5>
          </div>
          <hr style={{ margin: "2% 0 2% 0" }} />
          <h5
            style={{
              color: "#232F3E",
              marginTop: "4%",
              marginLeft: "7%",
              fontWeight: "bold",
            }}
          >
            Gift Cards
          </h5>
          <ul className="list-container" style={{ marginLeft: "7%" }}>
            <li className="list-name">All Gifts Cards</li>
            <li className="list-name">Popular Gift Cards</li>
            <li className="list-name">Gift Boxes,Gift Tags,Greeting Cards</li>
            <li className="list-name">Popular Brand Gift Vouchers</li>
            <li className="list-name"> Birthday Gift Cards </li>
            <li className="list-name">Wedding & Anniversary</li>
            <li className="list-name"> Best Wishes & Thank you</li>
            <li className="list-name">Cooperate Gift Cards</li>
          </ul>
          <hr style={{ margin: "2% 0 2% 0" }} />
          <h5
            style={{
              color: "#232F3E",
              marginTop: "4%",
              marginLeft: "7%",
              fontWeight: "bold",
            }}
          >
            Recharges
          </h5>
          <ul className="list-container" style={{ marginLeft: "7%" }}>
            <li className="list-name">Mobile Recharge</li>
          </ul>
        </div>
      </Offcanvas>
    </>
  );
}

export default SubSideBar;
