import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Sidebar from "../../components/Sidebar";
import Dummy from "../../assets/images/dummy.jfif";
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
  const { images = [] } = dataDetail;

  const handleImageHover = (event, image) => {
    console.log("---", image);
    setMainImage(image);
  };
  return (
    <>
      <Header />
      <SubHeader />
      <Sidebar />
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
                  height: 1600,
                  src: mainImage,
                },
                enlargedImageContainerStyle: {
                  zIndex: "1500",
                },
                enlargedImageContainerDimensions: {
                  width: "100%",
                  height: "170%",
                },
              }}
            />
          </div>
        </div>
        {isLoading && <Loader />}
        <div className="section-2"></div>
        <div className="section-3"></div>
      </div>
    </>
  );
}
export default ProductDetail;
