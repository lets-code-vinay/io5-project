import "./style.css";
import logo from "../../assets/amazon-logo-1.png";

function Footer() {
  return (
    <div className="footer">
      <div className="backToTop">Back to top</div>

      <div className="first">
        <div className="introduction">
          <ul>
            <li>
              <h3> To Know Us</h3>
            </li>
            <li>About Us</li>
            <li>Careers </li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="online ">
          <ul>
            <li>
              <h3>Connect with Us</h3>
            </li>
            <li>Facebook</li>
            <li>Twitter </li>
            <li>Instagram</li>
          </ul>
        </div>

        <ul>
          <li>
            <h3>Make Money with Us</h3>
          </li>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Protect and Build Your Brand</li>
          <li>Amazon Global Selling</li>
          <li>Become an Affiliate</li>
          <li>Fulfilment by Amazon</li>
          <li>Advertise Your Products</li>
          <li>Amazon Pay on Merchants</li>
        </ul>
        <div className="help">
          <ul>
            <li>
              <h3>Let Us Help You</h3>
            </li>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="second">
        <div className="logo">
          <img
            src={logo}
            style={{ width: "100px", height: "50px" }}
            alt="logo"
          />
          {/* <p>Logo</p> */}
          <select>
            <option>Hindi</option>
            <option>Punjabi</option>
            <option>English</option>
            <option>Tamil</option>
            <option>South</option>
            <option>Urdu</option>
          </select>
        </div>

        <ul className="country">
          <li>Itly</li>
          <li>Germany </li>
          <li>U.k</li>
          <li>England</li>
          <li>Brazil</li>
          <li>Canada</li>
          <li>London</li>
          <li>Dubai</li>
          <li>Turkey</li>
          <li>France</li>
        </ul>
      </div>

      <div className="third">
        <ul className="listFirst">
          <li>
            <h3>AbeBooks</h3>
            <span>Books, art & collections</span>
          </li>
          <li>
            <h3>Amazon Web Services</h3>
            <span>Scalable Cloud Computing Services</span>
          </li>
          <li>
            <h3>Audible</h3>
            <span>Download</span>
          </li>
          <li>
            <h3>IMDb</h3>
            <span>Movies,Tv</span>
          </li>
        </ul>

        <ul>
          <div className="bussiness">
            <li>
              <h3>Amazon bussiness</h3>
              <span>EveryThing sale</span>
            </li>
          </div>
          <li>
            <h3>Amazon Prime Service</h3>
            <span>100 million songs, ad-free Over </span>
          </li>
          <li>
            <h3>Prime Now</h3>
            <span>2 hours delivery</span>
          </li>
          {/* <div className="shop"> */}
          <li>
            <h3>Shopbop</h3>
            <span>Designer</span>
            <span>Fashion</span>
          </li>
          {/* </div> */}
        </ul>

        <div>
          <ul className="lastList">
            <li>conditions use</li>
            <li>Privacy Notice</li>
            <li>Interested Based-Ads</li>
          </ul>
        </div>
        <p className="para">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Footer;
