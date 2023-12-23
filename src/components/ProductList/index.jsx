import React, { useEffect, useState } from "react";
import "./style.css";
import dummy from "../../assets/image/dummy.jpg";
import axios from "axios";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
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
      console.error(
        "There are some issues in fetching homepage product api",
        err
      );
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
              <div>
                <div>
                  <p className="deal">Today's Deals</p>
                </div>
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
                  <p className="deal-of-the-day">{product?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
