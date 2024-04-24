import React from "react";
import "./Processing.css";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";

function Processing() {
  return (
    <div className="Frame-155-transaction-1-processing">
      {/* Frame 155 */}
      <div className="Rectangle-27-transaction-1-processing"></div>
      <div className="Confirm-Identity-transaction-1-processing">
        <Link to="/Deposit" className="Frame-123-transaction-1-processing">
          {/* Frame 123 */}
          <div className="Users-transaction-1-processing"></div>
        </Link>
        Confirm Identity
      </div>
      <div className="Line-1-transaction"></div>
      <div className="Group-54-transaction">
        {/* Group 54 */}
        <div className="Ellipse-20-transaction">
          {/* Ellipse 20 */}
          <Link to="/Finish">
            <CloseOutlined className="Vector-transaction" />
          </Link>
        </div>
      </div>
      {/* Frame 123 */}
      <div className="Users-transaction-1-processing"></div>
      <div className="frame-32-transaction-1-processing">
        {/* Frame 32 */}
        <div className="Amount-transaction-1-processing">Password</div>
        <div className="Rectangle-10-transaction-1-processing">
          <input type="password" placeholder="Enter your password" />
        </div>
        {/* Rectangle 10 */}
        <div className="Rectangle-10-transaction-2-processing">
          <input type="email" placeholder="Enter your Email" />
        </div>
        {/* Email */}
        <div className="Email-transaction-1-processing">Email</div>
        <Link to="/Deposit">
          <p className="Finish-transaction-1">Processing....</p>
        </Link>
      </div>
    </div>
  );
}

export default Processing;
