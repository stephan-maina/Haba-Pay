import React from "react";
import "./LoginIn.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginIn = () => {
  return (
    <div className="wrapper">
      <form>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" /> {/* Corrected icon component */}
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />{" "}
          {/* Changed type to "password" */}
          <FaLock className="icon" /> {/* Corrected icon component */}
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't Have an Account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginIn;
