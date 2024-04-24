import React from "react";
import "./Finish.css";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";

function Finish() {
  return (
    <div className="Frame-155-transaction">
      {/* Frame 155 */}
      <div className="Rectangle-27-transaction"></div>
      <div className="Confirm-Identity-transaction">Confirm Identity</div>
      <Link to="/Processing" className="Frame-123-transaction">
        {/* Frame 123 */}
        <div className="Users-transaction"></div>
        <Link to="/Processing">
          <p className="Finish-transaction">Finish</p>
        </Link>
      </Link>
      <div className="Line-1-transaction"></div>
      <div className="Group-54-transaction">
        {/* Group 54 */}
        <div className="Ellipse-20-transaction">
          {/* Ellipse 20 */}
          <Link to="/Transaction">
            <CloseOutlined className="Vector-transaction" />
          </Link>
        </div>
      </div>
      <div className="Input-Label-transaction">
        {/* Input & label */}
        <div className="Frame-32-transaction">
          {/* Frame 32 */}
          <div className="Amount-transaction">Password</div>
          <div className="Rectangle-10-transaction">
            <input type="password" placeholder="Enter your password" />
          </div>
        </div>
        {/* Rectangle 10 */}
        <div className="rectangle-10-transaction-1">
          <input type="email" placeholder="Enter your Email" />
        </div>
        {/* Email */}
        <div className="Email-transaction">Email</div>
      </div>
    </div>
  );
}

export default Finish;
