import React, { useEffect, useState } from "react";
import "./style.css";
import image from "../../assets/icons/ama.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import axios from "axios";

function Header() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = `https://restcountries.com/v3.1/all`;
    const res = await axios.get(api);
    const { data } = res || [];
    // console.log("data", data);
    setState(data);
  };
  const categories = [
    "Alexa Skills",
    "Amazon Pharmacy",
    "Amazon Device",
    "Amazon Medicne",
    "Prime Video ",
    "Jewellery",
    "Electronics",
    "Eqipments",
    "tools",
    "Apps and product",
    "Beauty",
    "Office products",
    "Software",
    "industies",
    "Book Furniture",
    "Clothing",
    "Toy and Games",
    "Grocery",
    "Pet Supplies",
  ];

  return (
    <React.Fragment>
      <div className="nav-1">
        <img className="img-cont" src={image} alt="image" />
        <div className="cont">
          <HiOutlineLocationMarker className="location-icon " />
          <p className="text">Delivered to Ludhiana 141203 </p>
          <p className="update-name">Update Location</p>
        </div>
        <div style={{ display: "flex", width: "67%" }}>
          <select className="inp1" value="all categories">
            {categories.map((category) => {
              return <option>{category}</option>;
            })}
          </select>

          <input
            className="search-inp"
            type="text"
            placeholder="Fina amazon.in"
          />
          <span style={{ width: "10%" }}>
            <IoSearch className="search-icon" />
          </span>
        </div>
        <div className="main-cont-list">
          <select className="country-list">
            {state.map((data, index) => {
              return (
                <option>
                  <img src={data?.flags.svg} alt="country" />
                  <p>{data?.name.common}</p>
                </option>
              );
            })}
          </select>
          <p className="cont-name">Country</p>
        </div>
        <p className="sign">
          Hello Sign in{" "}
          <strong style={{ fontSize: "15px" }}>Account & List</strong>
        </p>
        <p className="return">
          Returns <strong> & Order</strong>
        </p>
        <div className="cart-cont">
          <HiShoppingCart className="cart" />
          <h4>Cart</h4>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;
