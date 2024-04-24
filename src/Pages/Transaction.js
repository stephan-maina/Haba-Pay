import React from "react";
import "./Transaction.css";
import { Link } from "react-router-dom";

function Transaction() {
  return (
    <div className="Frame-54-transaction">
      <div className="Rectangle-27-transaction">
        <div className="Frame-186-transaction">
          <div className="request-by-transaction">Request by</div>
          <div className="name-transaction">Jane Mukenya M.</div>
        </div>
        <div className="Frame-184-transaction">
          <div className="number-transaction">Number</div>
          <div className="phone-transaction">+254 712345678</div>
        </div>
        <div className="Frame-185-transaction">
          <div className="amount-transaction">Amount</div>
          <div className="amount-value-transaction">Ksh 240</div>
        </div>
        <div className="Frame-183-transaction">
          <div className="time-transaction">Time</div>
          <div className="time-value-transaction">12:45 PM 5th March 2023</div>
        </div>
        <div className="Frame-187-transaction">
          <div className="vector-transaction"></div>
          <div className="deposited-transaction">Withdrawal</div>
        </div>
        <div className="transaction-details-transaction">
          Transaction Details
        </div>
        <Link to="/Finish" className="frame-123-transaction"></Link>
        <div className="users-transaction"></div>
        <Link to="/Finish">
          <p className="approve-transaction">Approve</p>
        </Link>
        <div className="Line-1-transaction"></div>
        <div className="Group-54-transaction">
          <div className="ellipse-20-transaction">
            <Link to="/Home">
              <p className="Vector-Transaction2"></p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
