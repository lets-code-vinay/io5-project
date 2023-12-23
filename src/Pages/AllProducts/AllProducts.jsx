import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import WordI from "../../assets/icons/i-icon.png";
import { FaStar } from "react-icons/fa6";
import "./style.css";
import Button from "react-bootstrap/Button";
import Tooltips from "../../components/Tooltips";
import Filters from "../../components/Filters/filter.jsx";
import axios from "axios";

function AllProducts() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    handleAllProduct();
  }, [[]]);
  const handleAllProduct = async () => {
    try {
      const api = `https://dummyjson.com/products`;
      const response = await axios.get(api);
      const { data: { products = [] } = {} } = response || {};
      if (response?.status === 200) {
        setAllData(products);
      }
      // console.log("response, data", response, products);
    } catch (err) {
      console.log("facing the problem in Api", err);
    }
  };
  return (
    <React.Fragment>
      <Header />
      <SubHeader />
      <div className="all-part">
        <div className="filter-part">
          <Filters />
        </div>
        <div className="all-products">
          <div className="icon-tool">
            <div>
              <Tooltips />
            </div>
            <div>
              <img src={WordI} alt="icon" className="wordI" />
            </div>
          </div>
          <div className="heading">
            <h1 id="header1">Results</h1>
            <p id="check">Check each product page for other buying options.</p>
          </div>
          {allData?.map((products, index) => {
            return (
              <div className="imgs-texts" key={index}>
                <div>
                  <img
                    id="photo-sec"
                    src={products?.thumbnail}
                    alt="thumbnail"
                  />
                </div>
                <div className="lines-list">
                  <div className="icon-tools">
                    <div id="tips">
                      <Tooltips />
                    </div>
                    <div>
                      <img src={WordI} alt="icon" className="wordsI" />
                    </div>
                  </div>
                  <div className="header3">
                    <h2>{products?.title}</h2>
                    <h3>{products?.description}</h3>
                  </div>
                  <div className="star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                    &nbsp;
                    {products?.rating}
                  </div>
                  <div className="month">
                    <p>5K+ bought in past month</p>
                  </div>
                  <div className="price">
                    <h2>&#8377; {products?.price}</h2>
                  </div>
                  <div className="extra">
                    <p>
                      Save extra with No Cost EMISave extra with No Cost EMI
                    </p>
                  </div>
                  <div className="delivery">
                    <p>FREE delivery</p>
                  </div>
                  <div>
                    <button id="add">Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default AllProducts;
