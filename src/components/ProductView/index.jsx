import React from "react";
import "./style.css";
import dummy from "../../assets/image/dummy-1.jpg";
import dummy1 from "../../assets/image/dummy-2.jpg";
import dummy2 from "../../assets/image/dummy-3.jpg";
import dummy3 from "../../assets/image/dummy-4.jpg";
import dummy4 from "../../assets/image/dummy-2nd-1.jpg";
import dummy5 from "../../assets/image/dummy-2nd-2.jpg";
import dummy6 from "../../assets/image/dummy-2nd-3.jpg";
import dummy7 from "../../assets/image/dummy-2nd-4.jpg";
import dummy8 from "../../assets/image/dummy-3rd.jpg";
import dummy9 from "../../assets/image/dummy-4rth-1.jpg";
import dummy10 from "../../assets/image/dummy-4rth-2.jpg";

function ProductView() {
  return (
    <>
      <div className="pro-main">
        <div className="pro-section-1">
          <div className="pro-text">
            <h2>Pick up where you left off</h2>
          </div>
          <div className="pro-1">
            <div>
              <img className="pro-image" src={dummy} alt="pro-image" />
              <p>KEBILSHOP SB 2....</p>
            </div>
            <div>
              <img className="pro-image-2" src={dummy1} alt="pro-image" />
              <p>amazon basics Us...</p>
            </div>
          </div>
          <div className="pro-2">
            <div>
              <img className="pro-image" src={dummy2} alt="pro-image" />
              <p>Ugreen Gold Plat...</p>
            </div>
            <div>
              <img className="pro-image-2" src={dummy3} alt="pro-image" />
              <p>UGREEN Mini US...</p>
            </div>
          </div>

          <p className="see-more">See more</p>
        </div>
        <div className="pro-section-2">
          <div className="pro-text">
            <h2>Up to 60% off | Amazon Brands & more</h2>
          </div>
          <div className="pro2-sec-1">
            <div>
              <img className="pro2-sec-1-img" src={dummy4} alt="pro-image" />
              <p>KEBILSHOP SB 2....</p>
            </div>
            <div>
              <img className="pro2-sec-1-img2" src={dummy5} alt="pro-image" />
              <p className="text-align">amazon basics Us...</p>
            </div>
          </div>
          <div className="pro2-sec-2">
            <div>
              <img className="pro2-sec-2-img" src={dummy6} alt="pro-image" />
              <p>Ugreen Gold Plat...</p>
            </div>
            <div>
              <img className="pro2-sec-2-img2" src={dummy7} alt="pro-image" />
              <p className="text-align">UGREEN Mini US...</p>
            </div>
          </div>
          <p className="see-more">See more</p>
        </div>
        <div className="pro-section-3">
          <div className="pro-text">
            <h2>Up to 60% off | Amazon Brands & more</h2>
          </div>
          <img className="pro3-sec-3-img" src={dummy8} alt="pro-image" />
          <br />
          <p className="shop-now">Shop now</p>
        </div>
        <div className="pro-section-4">
          <div className="pro4-section1">
            <h2 className="section4-text">
              Get 50% off on selling fee
              <p className="seller">Become a seller</p>
            </h2>
            <img className="pro4-sec-4-img" src={dummy9} alt="pro-image" />
          </div>
          <div className="pro4-section2">
            <img className="pro4-sec-4-img1" src={dummy10} alt="pro-image" />
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductView;
