import React, { useEffect, useState } from "react";
import "./style.css";
import { CiDeliveryTruck } from "react-icons/ci";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import { FaTrophy } from "react-icons/fa";
import SideBar from "../../components/SideBar";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Dummy from "../../assets/images/dummy.jfif";

import { FaCcApplePay } from "react-icons/fa";
import axios from "axios";
import Loader from "../../components/Loader/loader";
import ReactImageMagnify from "react-image-magnify";
function ProductDetail() {
  const [dataDetail, setDataDetail] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [mainImage, setMainImage] = useState(Dummy);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const api = "https://dummyjson.com/products/1";
      const response = await axios.get(api);

      const { data, status } = response || {};
      console.log("data", data);
      if (status == 200) {
        setDataDetail(data);
        setMainImage(data?.thumbnail);
      }
      setLoading(false);
    } catch (err) {
      console.log("facing a error");
      setLoading(false);
    }
  };
  const {
    images = [],
    description = [],
    rating = [],
    price = [],
    discountPercentage = [],
    brand = [],
    category = [],
    title = [],
  } = dataDetail;

  const handleImageHover = (event, image) => {
    console.log("---", image);
    setMainImage(image);
  };
  return (
    <>
      <Header />
      <SubHeader />
      <SideBar />
      <div className="main-cont">
        <div className="section-1">
          <div className="small-img">
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  className="images"
                  src={image}
                  alt="img"
                  onMouseOver={(e) => handleImageHover(e, image)}
                />
              );
            })}
          </div>
          <div>
            <ReactImageMagnify
              className="large-img"
              {...{
                smallImage: {
                  alt: "abcd",
                  isFluidWidth: true,
                  src: mainImage,
                },
                largeImage: {
                  width: 1000,
                  height: 1000,
                  src: mainImage,
                },
                enlargedImageContainerStyle: {
                  zIndex: "1500",
                },
                enlargedImageContainerDimensions: {
                  width: "140%",
                  height: "250%",
                },
              }}
            />
          </div>
        </div>
        {isLoading && <Loader />}
        <div className="section-2">
          <h3>{description}</h3>
          <a className="a" href="/">
            Visit a i Phone Store
          </a>
          <div className="sec-1.1">
            {/* <StarRating defaultValue={5} min={0} max={10} step={0.5} /> */}
            <a className="a" href="/">
              {rating}rating |
            </a>
            <a className="a" href="/">
              {" "}
              1000+ Answered Questions
            </a>
            <p style={{ color: "  rgb(67, 65, 65);" }}>
              5K+ bought in past month
            </p>
          </div>
          <hr style={{ marginBottom: "1%" }} />
          <div style={{ display: "flex" }}>
            <p className="sec-cont-1">{discountPercentage}%</p>
            <p className="sec-cont-2">Rs.{price}</p>
          </div>
          <p className="sec-cont-3">M.R.P 1000</p>
          <p className="sec-cont-4">Inclusive of all taxes</p>
          <p className="sec-cont-5">
            <strong>EMI</strong> starts at ₹897. No Cost EMI available
          </p>
          <hr style={{ marginBottom: "1%" }} />
          <div className="sec-1.3">
            <h6>Offers</h6>
            <div style={{ display: "flex" }}>
              <div className="sub-sec-3">
                <h6>No cost EMI</h6>
                <p className="offer-list">
                  Upto ₹1,032.87 EMI interest savings on select Credit Cards...
                </p>
                <p className="offer">2 offer</p>
              </div>
              <div className="sub-sec-3">
                <h6>Bank offer</h6>
                <p className="offer-list">
                  Upto ₹850.00 discount on Credit Cards, Federal Bank...
                </p>
                <p className="offer">14 Offer</p>
              </div>
              <div className="sub-sec-3">
                <h6>Pattner offer</h6>
                <p className="offer-list">
                  Get GST invoice and save up to 28% on business purchases
                </p>
                <p className="offer">1 Offer</p>
              </div>
            </div>
          </div>
          <hr style={{ marginBottom: "1%" }} />

          <div>
            <p
              style={{ marginBottom: "1", color: "  color: rgb(67, 65, 65);" }}
            >
              Category:
              <strong>{brand}</strong>{" "}
            </p>
          </div>
          <hr />
          <div style={{ display: "flex", fontSize: "40px", width: "100% " }}>
            <p className="ico">
              <CiDeliveryTruck className="icon-delivery" />
              <p className="delivery">7 days Service Centre Replacement</p>
            </p>
            <p className="ico">
              <FaTrophy className="icon-delivery" />
              <p className="delivery">Top Brand</p>
            </p>

            <p className="ico">
              <FaCcApplePay className="icon-delivery" />
              <p className="delivery">Pay on Delivery</p>
            </p>

            <p className="ico">
              <CiDeliveryTruck className="icon-delivery" />
              <p className="delivery">Amazon Delivered</p>
            </p>
          </div>
          <hr />
          <div>
            <p style={{ color: "  color: rgb(67, 65, 65);" }}>
              <strong> Modal Name :</strong> {category}
            </p>
            <p style={{ color: "  color: rgb(67, 65, 65);" }}>
              <strong> Brand :</strong> {brand}
            </p>
            <p style={{ color: "  color: rgb(67, 65, 65);" }}>
              <strong> Title : </strong>
              {title}
            </p>
          </div>
          <hr />
          <div>
            <h5>About this item</h5>
            <ul className="about">
              <li>
                16.42 Centimeters (6.5-Inch) Super AMOLED Display, FHD+
                Resolution, 1080 x 2340 Pixels Protected by Corning Gorilla
                Glass 5
              </li>
              <li>
                50MP+8MP+2MP Triple Camera Setup - True 50MP No Shake Cam (F1.8)
                Main Camera + 8MP (F2.2) + 2MP (F2.4)| 13MP (F2.0) Front Camera
              </li>
              <li>
                6000mAH Lithium-ion battery, 1 Year Manufacturer Warranty for
                Device and 6 Months Manufacturer Warranty for Inbox Accessories
                including batteries from the date of purchase
              </li>
              <li>
                4 Generations of OS Upgrades and 5 Years of Security Updates
              </li>
              <li>
                Exynos 1280 Octa Core 2.4GHz with the 12 Band Support for a True
                5G Experience
              </li>
            </ul>
          </div>
        </div>
        <div className="section-3">
          <div style={{ display: "flex" }}>
            <h6 className="w-exchange1">With Exchange</h6>
            <input type="radio" />
          </div>
          <p className="off">Up To Rs.400 off</p>
          <hr style={{ marginBottom: "1%" }} />
          <div style={{ display: "flex" }}>
            <h6 className="w-exchange">Without Exchange</h6>
            <input type="radio" />
          </div>

          <p className="off">
            Rs. {price} <p className="sec-cont-31">Rs.1000</p>
          </p>
          <div style={{ display: "flex" }}>
            <HiOutlineLocationMarker style={{ fontSize: "25px" }} />
            <p className="del">Delivery to Ludhiana 141203 Update Location</p>
          </div>
          <h5 style={{ color: "green" }}> In Stock</h5>
          <p className="stock">
            Sold by
            <span className="stock1">
              STPL Exclusive Online and Fulfilled by Amazon
            </span>
          </p>
          <h6>Add a protection plan:</h6>
          <div style={{ display: "flex" }}>
            <input className="input" type="checkbox" />
            <p className="checkbox">
              Acko 1-year Total Damage Protection for ₹1,099.00
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <input className="input" type="checkbox" />
            <p className="checkbox">
              Total Protection Plan by Quess for ₹799.00
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <input className="input" type="checkbox" />
            <p className="checkbox">
              SamsungCare+ Screen Damage Protection - 1 Year for ₹999.00
            </p>
          </div>
          {/* {quantity.map((quanty) => {
            return <option>{quanty}</option>;
          })} */}
          <div style={{ display: "flex", marginTop: "4%" }}>
            <h6>Quantity:</h6>
            <select>
              <option>1</option>
              <option>2</option> <option>3</option>
              <option>4</option> <option>5</option>
            </select>
          </div>
          <button className="btn-1">Add to Cart</button>
          <button className="btn-1">But Now</button>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
