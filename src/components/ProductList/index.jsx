import React, { useEffect, useState } from "react";
import "./style.css";
// import { useNavigate } from "react-router-dom";
import dummy from "../../assets/image/dammy.jpg";
import axios from "axios";

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  /**
   * @description Fetching data from API related to phone
   */
  useEffect(() => {
    const api = `https://dummyjson.com/products`;

    try {
      axios.get(api).then((response) => {
        const { data: { products } = {} } = response || {};
        console.log("response", products);
        setProductData(products);

        if (products.length > 0) {
        }
      });
    } catch (err) {
      console.error("There are some issues in fetching homepage api", err);
    }
  }, []);

  return (
    <>
      <div
        className="main-product-container"
        style={{ justifyContent: productData.length > 6 ? "start" : "center" }}
      >
        <div className="child">
          {productData.map((product, index) => {
            return (
              <div
                className="product-border"
                key={index}
                onClick={(e) => (e, product)}
              >
                <img
                  className="pro-image"
                  src={product?.thumbnail ? product?.thumbnail : dummy}
                  alt="pro-image"
                />
                <p className="title">{product?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
