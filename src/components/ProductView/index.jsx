import React from "react";
import "./style.css";
import dummy from "../../assets/image/dummy.jpg";
function ProductView() {
  return (
    <>
      <div className="pro-main">
        <div className="pro-1">
          <img className="pro-1-image" src={dummy} alt="pro-image" />
        </div>
        <div className="pro-2"></div>
        <div className="pro-3"></div>
        <div className="pro-4"></div>
        <div className="pro-5"></div>
      </div>
    </>
  );
}
export default ProductView;
