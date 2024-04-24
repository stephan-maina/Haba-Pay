import React from "react";
import "./Deposit.css";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";

function Deposit() {
  return (
    <div className="App">
      {/* Frame 54 */}
      <div className="Frame-54-transaction-deposit">
        {/* Rectangle 27 */}
        <div className="Rectangle-27-transaction-deposit">
          {/* Frame 186 */}
          <div className="Frame-186-transaction-deposit">
            {/* Request by */}
            <div className="request-by-transaction-deposit">From</div>
            {/* Jane Mukenya M. */}
            <div className="name-transaction-deposit">
              Jane Mukenya 0712345678
            </div>
          </div>
          {/* Frame 184 */}
          <div className="Frame-184-transaction-deposit">
            {/* Number */}
            <div className="number-transaction-deposit">Transaction ID</div>
            {/* +254 712345678 */}
            <div className="phone-transaction-deposit">BN12345678</div>
          </div>
          {/* Frame 185 */}
          <div className="Frame-185-transaction-deposit">
            {/* Amount */}
            <div className="amount-transaction-deposit">Amount</div>
            {/* Ksh 240 */}
            <div className="amount-value-transaction-deposit">240</div>
          </div>
          {/* Frame 183 */}
          <div className="Frame-183-transaction-deposit">
            {/* Time */}
            <div className="time-transaction-deposit">Time</div>
            {/* 12:45 PM 5th March 2023 */}
            <div className="time-value-transaction-deposit">
              2 February 2023 12:45 AM
            </div>
          </div>
          {/* Frame 187 */}
          <div className="Frame-187-transaction-deposit">
            {/* Vector */}
            <div className="vector-transaction-deposit"></div>
            {/* Deposited */}
            <div className="deposited-transaction-deposit">Deposit</div>
          </div>
          {/* Transaction Details */}
          <div className="transaction-details-transaction-deposit">
            Transaction Details
          </div>
          {/* Line 1 */}
          <div className="Line-1-transaction-deposit"></div>
          {/* Group 54 */}
          <div className="Group-54-transaction-deposit">
            {/* Ellipse 20 */}
            <div className="Ellipse-20-transaction-deposit">
              {/* Vector */}
              <Link to="/Home">
                <CloseOutlined className="vector-transaction2-deposit" />
              </Link>
            </div>
          </div>
          {/* Frame 53 */}
          <div id="frame-53-deposit"></div>
          {/* To */}
          <div id="to-deposit">To</div>
          {/* Frame 49 */}
          <div id="frame-49-deposit"></div>
          {/* Jane Mukenya */}
          <div id="jane-mukenya-deposit">Jane Mukenya</div>
          {/* Phone number */}
          <div id="phone-number-deposit">0712345678</div>
          {/* Line 28 */}
          <div id="line-28-deposit"></div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
