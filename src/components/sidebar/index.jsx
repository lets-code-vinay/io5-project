import { useState } from "react";
import "./style.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import SubSideBar from "./SubSideBar";
import { RxCaretRight } from "react-icons/rx";
import { IoIosContact } from "react-icons/io";

function SideBar(props) {
  const { handleClose, show, back } = props;
  const [isShowMore, setShowMore] = useState(false);
  const [isMore, setMore] = useState(false);
  const [isMenu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(true);
  };
  const handleMenuClose = () => {
    setMenu(false);
  };
  const toggle = () => {
    setShowMore(!isShowMore);
  };
  const toggle1 = () => {
    setMore(!isMore);
  };
  const handleStatement = (li) => {
    console.log("clicked", handleStatement, li);
  };
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="title" closeButton>
          <Offcanvas.Title className="title-name">
            <IoIosContact className="contact" /> Hello,Sign in
          </Offcanvas.Title>
        </Offcanvas.Header>
        <div className="containers">
          <h4 style={{ color: "#232F3E", fontWeight: "bold" }}> Trending</h4>
          <ul className="list-container">
            <li className="list-name">Best Seller</li>
            <li className="list-name">New Release</li>
            <li className="list-name">Movers and Shakers</li>
          </ul>
          <hr />
          <h4 style={{ color: "#232F3E", fontWeight: "bold" }}>
            Digital Content And Devices
          </h4>
          <ul className="list-container">
            <li className="list-name" onClicked={handleStatement}>
              Echo & Alexa
              <RxCaretRight className="icons" />
            </li>
            <li className="list-name" onClick={handleStatement}>
              Fire TV <RxCaretRight className="icons" />
            </li>
            <li className="list-name" onClick={handleStatement}>
              Kindle E-Readers & eBooks <RxCaretRight className="icons" />
            </li>
            <li className="list-name" onClick={handleStatement}>
              Audible Audiobooks <RxCaretRight className="icons" />
            </li>
            <li className="list-name" onClick={handleStatement}>
              Amazon Prime Video <RxCaretRight className="icons" />
            </li>
            <li className="list-name" onClick={handleStatement}>
              Amazon Prime Music <RxCaretRight className="icons" />
            </li>
          </ul>
          <hr />
          <h4 style={{ color: "#232F3E", fontWeight: "bold" }}>
            Shop By Category
          </h4>
          <ul className="list-container">
            <li className="list-name">
              Mobiles, Computers <RxCaretRight className="icons" />
            </li>
            <li className="list-name">
              Tv,Appliances <RxCaretRight className="icons" />
            </li>
            <li className="list-name">
              Mens Fashion
              <RxCaretRight className="icons" />
            </li>
            <li className="list-name">
              Women's Fashion
              <RxCaretRight className="icons" />
            </li>
          </ul>
          {isShowMore && (
            <ul className="list-container">
              <li className="list-name">
                Homes,Kitchens
                <RxCaretRight className="icons" />
              </li>
              <li className="list-name">
                beauty,Health <RxCaretRight className="icons" />
              </li>
              <li className="list-name">
                Sports,Fitness,Bags <RxCaretRight className="icons" />
              </li>
              <li className="list-name">
                Toys,Baby Products <RxCaretRight className="icons" />
              </li>
              <li className="list-name">
                Car,Motorbikes
                <RxCaretRight className="icons" />
              </li>
              <li className="list-name">
                Books
                <RxCaretRight className="icons" />
              </li>
              <li className="list-name">
                Movies,Music&Video
                <RxCaretRight className="icons" />
              </li>
            </ul>
          )}
          <button onClick={toggle} className="Button">
            {isShowMore ? `See Less ` : `See More`}
          </button>
          <hr />
          <h4 style={{ color: "#232F3E", fontWeight: "bold" }}>
            Programs & Features
          </h4>
          <ul className="list-container">
            <li className="list-name">Amazon Pay</li>
            <li className="list-name" onClick={handleMenu}>
              Gift Card & Recharge{" "}
              <RxCaretRight className="icons" onClick={handleMenu} />
            </li>
            <li className="list-name">Amazon Launchpad</li>
            <li className="list-name">Handloom & Handcraft</li>
          </ul>
          {isMore && (
            <ul className="list-container">
              <li className="list-name">Flight Control</li>
              <li className="list-name">Local Shops on Amazon</li>
              <li className="list-name">Buy More & See More</li>
              <li className="list-name">Clearness & Store</li>
            </ul>
          )}
          <button onClick={toggle1} className="Button">
            {isMore ? `See Less ` : `See More`}
          </button>
          <h4 style={{ color: "#232F3E", fontWeight: "bold" }}>
            Help & Support
          </h4>
          <ul className="list-container">
            <li className="list-name">Your Account</li>
            <li className="list-name">Customer Service</li>
            <li className="list-name">Sign in</li>
          </ul>
        </div>
      </Offcanvas>
      <SubSideBar
        handleMenu={handleMenu}
        handlemenuClose={handleMenuClose}
        isMenu={isMenu}
        setMenu={setMenu}
      />
    </>
  );
}

export default SideBar;
