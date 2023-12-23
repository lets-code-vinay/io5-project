import React from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import banner4 from "../../assets/banner/banner4.png";
import banner5 from "../../assets/banner/banner5.png";
import banner6 from "../../assets/banner/banner6.png";
import banner7 from "../../assets/banner/banner7.png";

function ImageSliders() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="slider-image" src={banner1} text="First slide" />
          <Carousel.Caption>
            <h3>Big Year End Sale</h3>
            <p>Grab the Year end Sale</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="slider-image" src={banner2} text="Second slide" />
          {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="slider-image" src={banner3} text="Third slide" />
          {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="slider-image" src={banner4} text="Third slide" />
          {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="slider-image" src={banner5} text="Third slide" />
          {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="slider-image" src={banner6} text="Third slide" />
          {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="slider-image" src={banner7} text="Third slide" />
          {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ImageSliders;
