import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
// import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tick from "../../assets/icons/tick.png";
import Accordion from "react-bootstrap/Accordion";
import phone from "../../assets/image/phone.webp";
import fulFilled from "../../assets/image/fulfilled.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import axios from "axios";

const CartPage = () => {



  return (
    <>
      <div className="main-sec">
        <div className="image-sec">
          <div className="head-part">
            <h1>Shopping Cart</h1>
            <h5>Deselect all items</h5>
            <h6 className="float">Price</h6>
            <hr />
          </div>
          <div className="main-card">
                <Card
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div className="min-img">
                    <Form.Check type="checkbox" id="box" />
                    <img id="image-1" src={phone} />
                  </div>
                  <div className="min-detail">
                    <Card.Body>
                      <div className="price-title-sec">
                        <Card.Title>
                          <p>
                            realme narzo N53 (Feather Black, 8GB+128GB) 33W
                            Segment Fastest Charging | Slimmest Phone in Segment
                            | 90 Hz Smooth Displayrealme narzo N53 (Feather
                            Black, 8GB+128GB) 33W Segment Fastest Charging |
                          </p>
                        </Card.Title>
                        <p className="rupees"><b>&#8377;18,998</b></p>
                      </div>
                      <div className="list">
                        <h4>In stock</h4>
                        <p className="ship">Eligible for FREE Shipping</p>
                        <img className="full" src={fulFilled} alt="fulfilled" />
                        <Form.Check
                          type="checkbox"
                          label="This Will be a gift Learn more"
                        />
                      </div>
                      {/* <div className="button-cont">
                        <Button variant="success">Add </Button>
                        <Button variant="danger">Remove </Button>
                      </div> */}
                    </Card.Body>
                  </div>
                </Card>
              </div>
        </div>
        <div className="payment-sec">
          <div className="first-sec">
            <div>
              <img className="tick-logo" src={Tick} alt="tick-logo " />
            </div>
            <div className="line">
              <div id="free">
                {" "}
                <span>
                  <b className="order-col">
                    Your order is eligible for FREE Delivery.
                  </b>
                </span>
              </div>

              <p className="select-line">
                Select this option at checkout. Details
              </p>
            </div>
          </div>

          <div className="payment-step">
            <p className="sub">
              Subtotal (2 items):<b>&#8377; 18,998.00</b>
            </p>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="This order contains a gift" />
            </Form.Group>
            <Button className="btn-buy">Proceed to Buy</Button>
            <Accordion defaultActiveKey="0" className="accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>EMI Available</Accordion.Header>
                <Accordion.Body>
                  Your order qualifies for EMI with valid credit cards (not
                  available on purchase of Gold, Jewelry, Gift cards and Amazon
                  pay balance top up). Learn more
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          
        </div>
      </div>
      <div className="small-sec">
        <div className="topic">
          <p>
            <b className="box-top">You might also like</b>
          </p>
          <div className="img-text-sec">
            <img src={phone} alt="phone" className="small-phone" />
            <div className="full-text">
              <p>text</p>
              <p>star</p>
              <p>price</p>
              <Button variant="success">add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
