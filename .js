import React, { useState } from "react";
import "./LoginIn.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., console.log the input values
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form className="MainContainer-1" onSubmit={handleSubmit}>
      <Link to="/">
        <p className="HabaPayTitle2">HabaPay</p>
      </Link>
      <div className="HugeBoldTitle">Log in to Account</div>
      <div className="LoginInputContainer">
        <label htmlFor="email" className="EmailLabel">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="InputField"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="LoginInputContainer2">
        <label htmlFor="password" className="PasswordLabel">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="InputField2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <Link to="/Home" className="ProcessingText">
        Processing...
      </Link>
      <Link to="/Home" className="ButtonContainer"></Link>
    </form>
  );
};

export default LoginForm;