import React from "react";
import "./style.css";
import image from "../../assets/icons/ama.png";

function SubHeader() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          background: "rgb(35,47,62)",
          height: "5vh",
          width: "100%",
          color: "white",
        }}
      >
        <h3>Amazon miniTV</h3>
        <h3>Sell </h3>
        <h3>Best Seller</h3>
        <h3>Today's Deal</h3>
        <h3>Mobile </h3>
        <h3>Customer Service</h3>
        <h3>Electronics</h3>
        <h3>New Release</h3>
        <h3>Prime</h3>
        <h3>Home And Kitchen</h3>
        <h3>Fashion</h3>
        <h3>Gift Idea</h3>
        <h3>Amazon Pay</h3>
        <h3>Computer</h3>
        <h3>Books</h3>
        <h3>Car And Motorbike</h3>
      </div>
    </React.Fragment>
  );
}
export default SubHeader;
