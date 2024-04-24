import React, { useState, useEffect } from "react";
import "./LoginIn.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("savedEmail");
    const storedPassword = localStorage.getItem("savedPassword");

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set submit button click event
    setSubmitClicked(true);
    // Check if email and password are valid
    if (!email || !password) {
      // Set error message for missing email or password
      setErrorMessage("Please enter both email and password.");
    } else if (
      (email === "stephanmaina27@gmail.com" ||
        email === "stephanmaina254@gmail.com" ||
        email === "stephorinho$9") &&
      password === "Mkadinali254"
    ) {
      // Clear error message
      setErrorMessage("");
      // Set login state to true
      setLoggedIn(true);

      // Save email and password if Remember Me is checked
      if (rememberMe) {
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
      }
    } else {
      // Set error message for invalid credentials
      setErrorMessage("Invalid Email or Password");
    }
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
        <div className="RememberMeContainer">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        {submitClicked && errorMessage && (
          <div className="ErrorMessage">
            <span role="img" aria-label="sad face">
              {errorMessage === "Please enter both email and password."
                ? "👉"
                : "😞"}
            </span>{" "}
            {errorMessage}
          </div>
        )}
      </div>
      {loggedIn ? (
        <Link to="/Home" className="ProcessingText">
          Processing...
        </Link>
      ) : (
        <button type="submit" className="ButtonContainer">
          Log In
        </button>
      )}
    </form>
  );
};

export default LoginForm;
