import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { LineChartOutlined } from "@ant-design/icons";
import { BellOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";

function Home() {
  const [isVisibleBalance, setIsVisibleBalance] = useState(false);
  const [isVisibleChartFilters, setIsVisibleChartFilters] = useState(false);

  const toggleVisibilityBalance = () => {
    setIsVisibleBalance(!isVisibleBalance);
  };

  const toggleVisibilityChartFilters = () => {
    setIsVisibleChartFilters(!isVisibleChartFilters);
  };

  return (
    <div className="frame-138">
      <div className="page-title">
        <Link to="/Home1">
          <p className="HOME-1">Home</p>
        </Link>
      </div>
      <div className="rectangle-28-Home"></div>
      <div className="top-right-buttons"></div>
      <div className="vector-circle"></div>
      <div className="ellipse-4"></div>
      <div className="user-dp-1"></div>
      <div className="mask-group"></div>
      <div className="position-wrapper">
        <div className="rectangle-18"></div>
        <div className="frame-144">
          <div className="frame-143">
            <h1 className="haba-pay">HabaPay</h1>
            <div className="frame-141"></div>
            <div className="frame-140"></div>
            <div className="user-dp"></div>
            <div className="mask-group"></div>
            <div className="ellipse-18"></div>
            <BellOutlined className="unsplash-Img" />
            <div className="frame-138">
              <p className="welcome-text">Welcome back,</p>
              <p className="name">James Nakamoto</p>
            </div>
            <div className="frame-139"></div>
          </div>
          <div className="frame-133">
            <div className="frame-132">
              <div>
                <p
                  className="current-balance"
                  onClick={toggleVisibilityBalance}
                >
                  Current Balance
                </p>
                {isVisibleBalance ? (
                  <EyeOutlined
                    onClick={toggleVisibilityBalance}
                    className="vector-eye"
                  />
                ) : (
                  <EyeInvisibleOutlined
                    onClick={toggleVisibilityBalance}
                    className="vector-eye"
                  />
                )}
                {isVisibleBalance && <p className="balance">Ksh 345,226</p>}
              </div>
            </div>
            <div className="frame-142"></div>
            <div className="frame-129"></div>
          </div>
          <div className="frame-121">
            <div className="vector-HOME"></div>
            <p className="HOME">Home</p>
          </div>
          <div className="frame-122">
            <div className="union-Home">
              <LineChartOutlined />
            </div>
            <Link to="/Analytics">
              <p className="analytics">Analytics</p>
            </Link>
          </div>
          <div className="frame-123">
            <div className="vector-manager"></div>
            <Link to="/Manage">
              <p className="manage-users">Manage Users</p>
            </Link>
            <div className="vector4"></div>
            <Link to="/Settings">
              <p className="Settings-Home">Settings</p>
            </Link>
            <div className="vector5"></div>
            <Link to="/">
              <p className="logout">Log out</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Rectangle 23 */}
      <div className="RECTANGLE-23"></div>
      {/* Frame 152 */}
      <div className="frame-152">
        {/* Transaction Statistics */}
        <div className="Transaction-Stats">Transaction Statistics</div>
        {/* Frame 151 */}
        <div className="frame-151">
          {/* Frame 147 */}
          <div className="frame-147">
            {/* Chart Filters */}
            <div className="Chart-Filters">Chart Filters</div>
            <div className="vector1" onClick={toggleVisibilityChartFilters}>
              <CaretDownOutlined />
            </div>

            {isVisibleChartFilters && (
              <div className="frame-150">
                <div className="frame-148">
                  <div className="week">Week</div>
                  <div className="vector2"></div>
                </div>
                <div className="frame-149">
                  <div className="k-amount">100k</div>
                  <div className="vector3"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Frame 267 */}
      <div className="Frame-267">
        {/* Amt Y-axis */}
        <div className="Amt-Y-axis">
          {/* 500k */}
          <div className="Amt-500k">500k</div>
          {/* 400k */}
          <div className="Amt-400k">400k</div>
          {/* 300k */}
          <div className="Amt-300k">300k</div>
          {/* 200k */}
          <div className="Amt-200k">200k</div>
          {/* 100k */}
          <div className="Amt-100k">100k</div>
          {/* 0 */}
          <div className="Amt-0">0</div>
        </div>
      </div>

      {/* Frame 153 */}
      <div className="Frame-153">
        {/* Chart Grid */}
        <div className="Chart-Grid">
          {/* X axis */}
          <div className="X-Axis">
            {/* Line 13 to Line 18 */}
            <div className="Ln-13"></div>
            <div className="Ln-14"></div>
            <div className="Ln-15"></div>
            <div className="Ln-16"></div>
            <div className="Ln-17"></div>
            <div className="Ln-18"></div>
          </div>
          {/* Y axis */}
          <div className="Y-Axis">
            {/* Line 19 to Line 25 */}
            <div className="ln-19"></div>
            <div className="ln-20"></div>
            <div className="ln-21"></div>
            <div className="ln-22"></div>
            <div className="ln-23"></div>
            <div className="ln-24"></div>
            <div className="ln-25"></div>
          </div>
          {/* Days X-axis */}
          <div className="Days-X-Axis">
            {/* Sun to Sat */}
            <div className="Sun">Sun</div>
            <div className="Mon">Mon</div>
            <div className="Tue">Tue</div>
            <div className="Wed">Wed</div>
            <div className="Thur">Thur</div>
            <div className="Fri">Fri</div>
            <div className="Sat">Sat</div>
          </div>
        </div>
      </div>
      {/* Group 83 */}
      <div className="Group-83">
        {/* Frame 332 */}
        <div className="Frame-332">
          {/* Group 80 */}
          <div className="Group-80">
            {/* Rectangle 43 */}
            <div className="Rectangle-43">
              {/* Ellipse 31 */}
              <div className="Ellipse-31"></div>
            </div>
          </div>
          {/* National Reach */}
          <div className="National-Reach">National Reach</div>
        </div>
      </div>

      {/* Frame 333 */}
      <div className="Frame-333">
        {/* Group 81 */}
        <div className="Group-81">
          {/* Rectangle 41 */}
          <div className="Rectangle-41">
            {/* Ellipse 30 */}
            <div className="Ellipse-30"></div>
          </div>
        </div>
        {/* New Users */}
        <div className="New-Users-1">New Users</div>
      </div>

      {/* Frame 335 */}
      <div className="Frame-335">
        {/* LEGEND */}
        <div className="Legend">LEGEND</div>
      </div>

      <div className="rectangle-25"></div>
      <div className="recent-activity">Recent Activity</div>
      <div className="frame-182">
        <div className="frame-175">
          <div className="frame-173-3">
            <div className="Grace-Mwai">
              Grace Mwai added business to HabaPay
            </div>
            <div className="Today-11-55PM-1">Today, 11:55PM</div>
          </div>
          <div className="frame-174">
            <div className="review">Review</div>
            <div className="vector"></div>
          </div>
        </div>
        <div className="frame-176">
          <div className="frame-173-1">
            <div className="Jane-mukenya">Jane Mukenya M. withdrew Ksh 240</div>
            <div className="today-12-45PM">Today, 12:45PM</div>
          </div>
          <div className="frame-174-1">
            <div className="review-1">Review</div>
            <div className="vector-arrow"></div>
          </div>
        </div>
        <div className="frame-177">
          <div className="frame-173-2">
            <div className="obi-peter">Obi Peter withdrew Ksh 40000</div>
            <div className="today-12-00PM">Today, 12:00PM</div>
          </div>
          <div className="frame-174-2">
            <div className="review-2">Review</div>
            <div className="vector-arrow-2"></div>
          </div>
        </div>
        <div className="frame-178">
          <div className="frame-173-4">
            <div className="Bola-tinubu">
              Bola Tinubu sent Ksh 40 to Client Mwilu
            </div>
            <div className="today-11-05AM">Today, 11:05AM</div>
          </div>
          <div className="frame-174-4">
            <div className="review-4">Review</div>
            <div className="vector-arrow-4"></div>
          </div>
        </div>
        <div className="frame-179">
          <div className="frame-173-5">
            <div className="Bola-Tinubu">
              Bola Tinubu deposited Ksh 100 to wallet
            </div>
            <div className="today-11-00AM">Today, 11:00AM</div>
          </div>
          <div className="frame-174-5">
            <div className="review-5">Review</div>
            <div className="vector-arrow-5"></div>
          </div>
        </div>
        <div className="Frame-180-Home">
          <div className="Frame-173-6-Home">
            <div className="Bola-Tinubu-Home">
              Bola Tinubu created a new HabaPay account
            </div>
            <div className="today-10-30AM">Today, 10:30AM</div>
          </div>
          <div className="frame-174-6">
            <div className="Review-6">Review</div>
            <div className="vector"></div>
          </div>
        </div>
        <div className="frame-181">
          <div className="frame-173-3">
            <div className="grace-mwai-1">
              Grace Mwai added business to HabaPay
            </div>
            <div className="today-11-55PM">Today, 11:55PM</div>
          </div>
          <div className="frame-174-3">
            <div className="review-3">Review</div>
            <div className="vector-arrow-3"></div>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="Rectangle-24"></div>
        <div className="transactions-header">Transactions</div>
        <div className="frame-172">
          <Link to="/Transaction" className="pending"></Link>
          <Link to="/Transaction">
            <p className="pending-text">Pending</p>
          </Link>
        </div>
        <Link to="/Deposit" className="approved"></Link>
        <Link to="/Deposit">
          <p className="approved-text">Approved</p>
        </Link>
        <div></div>
        <div className="box-sizing-border-box">
          <div className="width-370">
            <div className="flex-row">
              <div className="width-44">
                <div className="Vector"></div>
              </div>
              <div className="sent">
                <div className="flex-column">
                  <div className="NAME">Jane Mukenya M.</div>
                  <div className="phone">+254 712345678</div>
                </div>
                <div className="amount">Ksh 240</div>
                <div className="time">12:45 PM</div>
              </div>
            </div>
          </div>

          <div className="width-370-1">
            <div className="flex-row-1">
              <div className="width-44-1">
                <div className="VECTOR-I"></div>
              </div>
              <div className="sent-1">
                <div className="flex-column-1">
                  <div className="name-1">Obi Peter</div>
                  <div className="phone-1">+254 712345678</div>
                </div>
                <div className="amount-1">Ksh 4000</div>
                <div className="time-1">12:00 PM</div>
              </div>
            </div>
          </div>

          <div className="width-370-2">
            <div className="flex-Row-2">
              <div className="flex-row-2">
                <div className="Vector-II"></div>
              </div>
              <div className="sent-2">
                <div className="flex-column-2">
                  <div className="name-2">Bola Tinubu</div>
                  <div className="phone-2">+254 712345678</div>
                </div>
                <div className="amount-2">Ksh 40</div>
                <div className="time-2">11:05 AM</div>
              </div>
            </div>
          </div>

          <div className="width-370-3">
            <div className="flex-row-3">
              <div className="flex-Column-3">
                <div className="Vector-III"></div>
              </div>
              <div className="sent-3">
                <div className="flex-column-3">
                  <div className="name-3">John Doe</div>
                  <div className="phone-3">+254 712345678</div>
                </div>
                <div className="amount-3">Ksh 60</div>
                <div className="time-3">10:05 AM</div>
              </div>
            </div>
          </div>

          <div className="width-370-4">
            <div className="flex-row-4">
              <div className="flex-Row">
                <div className="Vector-IV"></div>
              </div>
              <div className="sent-4">
                <div className="flex-column-4">
                  <div className="name-4">Client Mwilu</div>
                  <div className="phone-4">+254 712345678</div>
                </div>
                <div className="amount-4">Ksh 100</div>
                <div className="time-4">8:16 AM</div>
              </div>
            </div>
          </div>

          <div className="width-370-5">
            <div className="flex-row-5">
              <div className="flex-column-5">
                <div className="Vector-V"></div>
              </div>
              <div className="sent-5">
                <div className="flex-column-6">
                  <div className="name-5">Josephine Naruto</div>
                  <div className="phone-5">+254 712345678</div>
                </div>
                <div className="amount-5">Ksh 180</div>
                <div className="time-5">5:55 AM</div>
              </div>
            </div>
          </div>

          <div className="width-370-6">
            <div className="flex-row-6">
              <div className="flex-row-7">
                <div className="Vector-VI"></div>
              </div>
              <div className="sent-6">
                <div className="flex-column-8">
                  <div className="NAME-6">Grace Mwai</div>
                  <div className="phone-6">+254 712345678</div>
                </div>
                <div className="amount-6">Ksh 750</div>
                <div className="time-6">1:07 PM</div>
              </div>
            </div>
          </div>
        </div>
        {/* Rectangle 26 */}
        <div className="Rectangle-26"></div>

        {/* Frame 170 */}
        <div className="Frame-170">
          <div className="new-users">New Users</div>

          {/* Frame 169 */}
          <div className="frame-169">
            <div className="view-all">View All</div>
            <div className="vectorA"></div>
          </div>
        </div>

        {/* Frame 171 */}
        <div className="Frame-171"></div>

        {/* 5th March 2023 */}
        <div className="Date-Label">5th March 2023</div>

        {/* Frame 54 */}
        <div className="Frame-54">
          {/* Frame 14 */}
          <div className="Frame-14">
            {/* Group 53 */}
            <div className="Group-53">
              {/* Grace Mwai */}
              <div className="GRACE-MWAI">Grace Mwai</div>
              {/* gracemwai444@haba.co.ke */}
              <div className="Grace-Email">gracemwai444@haba.co.ke</div>
              {/* Vector */}
              <div className="Vector-1-Email"></div>
            </div>
          </div>

          {/* Frame 165 */}
          <div className="Frame-165">
            {/* Bola Tinubu */}
            <div className="bola-tinubu">Bola Tinubu</div>
            {/* bolatinubu00@outlook.com */}
            <div className="bola-email">bolatinubu00@outlook.com</div>
            {/* Vector */}
            <div className="vector-2"></div>
          </div>

          {/* Frame 166 */}
          <div className="Frame-166">
            {/*Nancy Wajacoki */}
            <div className="nancy-wajacoki">Nancy Wajacoki</div>
            {/* nancywajacoki22@yahoo.com */}
            <div className="nancy-email">nancywajacoki22@yahoo.com</div>
            {/* Vector */}
            <div className="vector-3"></div>
          </div>

          {/* Frame 167 */}
          <div className="Frame-167">
            {/* Peter Obi */}
            <div className="Peter-obi">Peter Obi</div>
            {/* obidientpeter@state.ng */}
            <div className="peter-email">obidientpeter@state.ng</div>
            {/* Vector */}
            <div className="vector-4"></div>
          </div>

          {/* Frame 168 */}
          <div className="Frame-168">
            {/* Client Mwilu */}
            <div className="client-mwilu">Client Mwilu</div>
            {/* clientmwilu@gmail.com */}
            <div className="client-email">clientmwilu@gmail.com</div>
            {/* Vector */}
            <div className="vector-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
