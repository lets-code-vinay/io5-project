import React, { useState } from "react";
import img from "../../Assets/icons/logo1.png";
// import "bootstrap/dist/cscos/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { RxCross1 } from "react-icons/rx";
import Loader from "../Loader/loader";
import axios from "axios";
import "./style.css";

const Login = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const handleEmail = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };
  const handlePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };
  const handleLogin = async () => {
    try {
      setIsLoader(true);
      const api = "https://dummyjson.com/auth/login";
      const response = await axios.post(api, {
        username: "kminchelle",
        password: "0lelplR",
      });
      const { data = {} } = response || {};
      console.log("--->> ", data);
      if (response?.status === 200) {
        localStorage.setItem("userData", JSON.stringify(data));

        setIsLoader(false);
      }
    } catch (error) {
      console.log(" facing the problem in api", error);
      setIsLoader(false);
    }
  };
  return (
    <>
      <div className="d-flex">
        <img className="logo" src={img} alt=" logo" />
        <span className=" logo-child">.in</span>
      </div>

      <div className="main-container">
        <div className="head">
          <h1>Sign in</h1>
        </div>
        <div className="email-section">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label id="mob-label">
                <b>Email or mobile phone number</b>
              </Form.Label>
              <Form.Control
                className="input-email"
                type="email"
                placeholder="enter your email"
                name="email"
                value={userData?.email}
                onChange={(e) => handleEmail(e)}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="password">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="pass-parent">
                <Form.Label id="pass-label">
                  <b>Password</b>
                </Form.Label>
                <Button variant="link">Forget Password</Button>
              </div>
              <Form.Control
                className="input-password"
                type="password"
                placeholder=" Enter a password"
                name="password"
                value={userData?.password}
                onChange={(e) => handlePassword(e)}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="btn-container">
          <Button
            type="button"
            className="sign-btn"
            onClick={handleLogin}
            disabled={
              userData?.email.length < 6 || userData?.password.length < 6
            }
          >
            Sign in
          </Button>
          {(userData?.email.length < 6 || userData?.password.length < 6) && (
            <p style={{ color: "red" }}>
              Please Enter valid
              {userData?.email.length < 6 ? " Email" : " Password"}
            </p>
          )}
        </div>
        {isLoader && <Loader />}
        <div className="text">
          <p>
            By continuing, you agree to Amazon's
            <span className="conditions"> Conditions of Use</span> and
            <span className="conditions"> Privacy Notice.</span>
          </p>
        </div>
        <div className="check-box">
          <div className="box1">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className="box-set"
                type="checkbox"
                label="Keep me signed in."
              />
            </Form.Group>
          </div>
          <div className="dropdown">
            <Dropdown as={ButtonGroup}>
              <Button variant="link">Details</Button>
              <Dropdown.Toggle split variant="" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item>
                  <strong>"Keep Me Signed In" Checkbox</strong>
                  <RxCross1 id="cross-icon" />
                </Dropdown.Item>
                <Dropdown.Item>
                  Choosing "Keep me signed in" reduces the number of times
                  you're asked to Sign-In on this device.
                </Dropdown.Item>
                <Dropdown.Item>
                  To keep your account secure, use this option only on your
                  personal devices.
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="line">
          <hr className="hr1" />
          <p className="para">New to Amazon?</p>
          <hr className="hr2" />
        </div>
        <div className="btn2-container">
          <Button className="create-btn">Create your Amazon account</Button>
        </div>
      </div>
    </>
  );
};
export default Login;
