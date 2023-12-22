import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./style.css";
import { IoStar } from "react-icons/io5";
import { FaArrowsUpDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";

const Filters = () => {
  const [show, setShow] = useState(true);
  const [allFilter, setAllFilter] = useState([]);
  useEffect(() => {
    handleFilters();
  }, [[]]);
  const handleFilters = async () => {
    try {
      const api = `https://dummyjson.com/products`;
      const response = await axios.get(api);
      const { data: { products = [] } = {} } = response || {};
      if (response?.status === 200) {
        setAllFilter(products);
      }
      console.log("response, data", response, products);
    } catch (err) {
      console.log("facing the problem in Api", err);
    }
  };
  const clickChange = () => {
    setShow(!show);
  };
  return (
    <>
      <div>
        <div>
          <p>
            <b>Delivery Day</b>
          </p>
          <Form className="form-list">
            <input className="check-box" type="checkbox" />
            <label className="hlo">Get It by Tomorrow</label>
            <input className="check-box-2" type="checkbox" />
            <label className="hlo-2">Get It in 2 Days</label>
          </Form>
        </div>
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>
              <b id="cateord">Category</b>
            </Accordion.Header>
            {allFilter.map((products, index) => {
              return (
                <Accordion.Body key={index}>
                  <h6 className="category">{products?.category}</h6>
                </Accordion.Body>
              );
            })}
          </Accordion.Item>
        </Accordion>
        <div>
          <p id="review">
            <b>Customer Review</b>
          </p>
          <ul className="star">
            {" "}
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
          </ul>
          <ul className="star">
            {" "}
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
          </ul>
          <ul className="star">
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
          </ul>
        </div>
        <div>
          <h4>Brand</h4>
          <button id="show" onClick={clickChange}>
            {show ? "Less" : "More"}

            {<FaArrowsUpDown /> ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDropdownCircle />
            )}
          </button>
          {show
            ? allFilter?.map((products, index) => {
                return (
                  <div className="brand-name" key={index}>
                    <input className="check-box-3" type="checkbox" />
                    <label className="hlo-2">{products?.title}</label>
                  </div>
                );
              })
            : null}
        </div>
        <div id="range-go">
          <input type="range" id="range" />
        </div>
      
        <div>
          <p>
            {" "}
            <b>Deals & Discounts</b>
          </p>
          <p>All Discounts</p>
          <p>Today's Deals</p>
        </div>
        <div>
          <p>
            <b>Mobile Phone Connectivity Technology</b>
          </p>
          <ul>
            <li>
              <input className="check-box-3" type="checkbox" />
              <label className="hlo-2">Bluetooth</label>
            </li>
            <li>
              <input className="check-box-3" type="checkbox" />
              <label className="hlo-2">Infrared</label>
            </li>
            <li>
              {" "}
              <input className="check-box-3" type="checkbox" />
              <label className="hlo-2">NFC</label>
            </li>
            <li>
              {" "}
              <input className="check-box-3" type="checkbox" />
              <label className="hlo-2">Wi-Fi</label>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <b>Discount</b>
          </p>
          <ul id="dis">
            <li>10% Off or more</li>
            <li>25% Off or more</li>
            <li>35% Off or more</li>
            <li>50% Off or more</li>
            <li>60% Off or more</li>
            <li>70% Off or more</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Filters;
