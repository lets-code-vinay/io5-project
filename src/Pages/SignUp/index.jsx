import React, { useState } from "react";
import "./style.css"; // You can create a separate CSS file for styling
// import image from "../../assets/icons/logo1.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="signup-container">
      {/* <img src={image} width="180px" className="logo-pic" /> */}
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <b>Your name</b>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="First and last name"
          required
        />
        <label>
          <b>Mobile number or Email</b>
        </label>
        <input
          type="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="At least 6 character"
          required
        />
        <label>
          <b>Re-enter password</b>
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <i class="a-icon a-icon-alert"></i>
        <i class="a-icon a-icon-alert"></i>
        <p className="password-info">
          Passwords must be at least 6 characters.
        </p>
        <button type="submit">Create your Amazon account</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/">Sign in</a>
      </p>
    </div>
  );
};

export default SignUp;
