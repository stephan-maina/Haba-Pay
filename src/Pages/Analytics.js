import React, { useState } from "react";
import "./Analytics.css";
import { Link } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { LineChartOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { BellOutlined } from "@ant-design/icons";

function Analytics() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className="frame-138">
        <div className="page-title">
          <div className="Home-1">Analytics</div>
        </div>
        <div className="frame-136"></div>
        <input className="Search-Input" type="text" placeholder="Search..." />
        <div className="search-container">
          <SearchOutlined className="search-icon" />
        </div>

        <div className="top-right-buttons">
          <div className="vector-circle"></div>
          <div className="ellipse-4"></div>
          <div className="user-dp-1"></div>
          <div className="mask-group"></div>
        </div>
        <div className="position-wrapper">
          <div className="rectangle-18"></div>
          <div className="frame-144">
            <div className="frame-143">
              <Link to="/Home">
                <p className="haba-pay">HabaPay</p>
              </Link>
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
                  <p className="current-balance">Current Balance</p>
                  {isVisible ? (
                    <EyeOutlined
                      onClick={() => setIsVisible(false)}
                      className="vector-eye"
                    />
                  ) : (
                    <EyeInvisibleOutlined
                      onClick={() => setIsVisible(true)}
                      className="vector-eye"
                    />
                  )}
                  {isVisible && <p className="balance">Ksh 345,226</p>}
                </div>
              </div>
              <div className="frame-142"></div>
              <div className="frame-129"></div>
            </div>
            <div className="frame-121-analytics">
              <div className="vector-Home"></div>
              <Link to="/Home">
                <p className="Home">Home</p>
              </Link>
            </div>
            <div className="frame-122-Analytics">
              <div className="union-analytics">
                <LineChartOutlined />
              </div>
              <p className="analytic">Analytics</p>
            </div>
            <div className="frame-123">
              <div className="Vector-manager"></div>
              <Link to="/Manage">
                <p className="manage-users">Manage Users</p>
              </Link>
              <div className="vector4"></div>
              <Link to="/Settings">
                <p className="Settings-Analytics">Settings</p>
              </Link>
              <div className="vector5"></div>
              <Link to="/">
                <p className="logout">Log out</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-23"></div>
      {/* Rectangle 47 */}
      <div className="rectangle-47"></div>
      {/* Weekly Usage */}
      <div className="weekly-usage">Weekly Usage</div>
      {/* 16,845 Transactions */}
      <div className="transactions">16,845 Transactions</div>
      {/* Frame 324 */}
      <div className="frame-324">
        {/* Vector */}
        <div className="vector-transactions"></div>
        {/* 3% */}
        <div className="percentage">3%</div>
      </div>

      {/* Rectangle 48 */}
      <div className="rectangle-48"></div>
      {/* Weekly Sign-ups */}
      <div className="Weekly-Sign-ups">Weekly Sign-ups</div>
      {/* 225 Users */}
      <div className="transactions-users">225 Users</div>
      {/* Frame 324 */}
      <div className="frame-324-1">
        {/* Vector */}
        <div className="vector-users"></div>
        {/* 3% */}
        <div className="Percentage">5%</div>
      </div>

      {/* Rectangle 49 */}
      <div className="rectangle-49"></div>
      {/* Weekly Exchange */}
      <div className="Weekly-Exchange">Weekly Exchange</div>
      {/* Ksh 204,558 */}
      <div className="Ksh-204-558">Ksh 204,558</div>
      {/* Frame 324 */}
      <div className="frame-324-2">
        {/* Vector */}
        <div className="vector-Kshs"></div>
        {/* 3% */}
        <div className="Percentages">5%</div>
      </div>
      {/* App Adoption */}
      <div className="App-Adoption">App Adoption</div>

      {/* Frame 147 */}
      <div className="Frame147-2">
        <div className="Filter">Filter</div>
        <div className="FilterIcon"></div>
      </div>

      {/* Frame 267 */}
      <div className="Frame267-1"></div>
      <div className="frame-267"></div>

      {/* Amt Y-axis */}
      <div className="amt-y-axis">
        <div className="amt-500">500</div>
        <div className="amt-400">400</div>
        <div className="amt-300">300</div>
        <div className="amt-200">200</div>
        <div className="amt-100">100</div>
        <div className="amt-0">0</div>
      </div>

      {/* Amt Y-axis */}
      <div className="Amt-y-axis">
        <div className="Amt-500">50</div>
        <div className="Amt-400">40</div>
        <div className="Amt-300">30</div>
        <div className="Amt-200">20</div>
        <div className="Amt-100">10</div>
        <div className="Amt-0">0</div>
      </div>

      {/* Frame 153 */}
      <div className="frame-153">
        {/* Chart Grid */}
        <div className="chart-grid"></div>

        {/* X axis */}
        <div className="x-axis">
          <div className="line-13"></div>
          <div className="line-14"></div>
          <div className="line-15"></div>
          <div className="line-16"></div>
          <div className="line-17"></div>
          <div className="line-18"></div>
        </div>

        {/* Y axis */}
        <div className="y-axis">
          <div className="line-19"></div>
          <div className="line-20"></div>
          <div className="line-21"></div>
          <div className="line-22"></div>
          <div className="line-23"></div>
          <div className="line-24"></div>
          <div className="line-25"></div>
        </div>

        {/* Days X-axis */}
        <div className="days-x-axis">
          <div className="sun">Sun</div>
          <div className="mon">Mon</div>
          <div className="tue">Tue</div>
          <div className="wed">Wed</div>
          <div className="thur">Thur</div>
          <div className="fri">Fri</div>
          <div className="sat">Sat</div>
        </div>
      </div>
      {/* Graph 1 */}
      <div className="graph-1"></div>
      {/* Graph 2 */}
      <div className="graph-2"></div>
      {/* Group 83 */}
      <div className="group-83">
        {/* Frame 332 */}
        <div className="frame-332">
          {/* Group 80 */}
          <div className="group-80"></div>
          {/* Rectangle 43 */}
          <div className="rectangle-43">
            {/* Ellipse 31 */}
            <div className="ellipse-31"></div>
          </div>
          {/* National Reach */}
          <div className="national-reach">National Reach</div>
        </div>
        {/* Frame 333 */}
        <div className="frame-333">
          {/* Group 81 */}
          <div className="group-81">
            {/* Rectangle 41 */}
            <div className="rectangle-41">
              {/* Ellipse 30 */}
              <div className="ellipse-30"></div>
            </div>
          </div>
          {/* New Users */}
          <div className="New-users-1">New Users</div>
        </div>
      </div>
      {/* Frame 335 */}
      <div className="frame-335">
        {/* LEGEND */}
        <div className="legend">LEGEND</div>
      </div>
      {/* Rectangle 24 */}
      <div className="rectangle-24"></div>

      {/* Customers by Region */}
      <div className="customers-by-region">Customers by Region</div>

      {/* Rectangle 40 */}
      <div className="rectangle-40"></div>

      {/* Rectangle 45 */}
      <div className="rectangle-45"></div>

      {/* Rectangle 46 */}
      <div className="rectangle-46"></div>

      {/* Vector Plus */}
      <div className="vector-Plus"></div>

      {/* Vector Subtraction */}
      <div className="vector-Subtraction"></div>
      {/* Kenyan Map */}
      <div className="kenyan-map"></div>
      {/* Ellipse 41 */}
      <div className="ellipse-41"></div>

      {/* Ellipse 40 */}
      <div className="ellipse-40"></div>

      {/* Ellipse 39 */}
      <div className="ellipse-39"></div>

      {/* Ellipse 38 */}
      <div className="ellipse-38"></div>

      {/* Ellipse 34 */}
      <div className="ellipse-34"></div>

      {/* Ellipse 36 */}
      <div className="ellipse-36"></div>

      {/* Ellipse 35 */}
      <div className="ellipse-35"></div>

      {/* Ellipse 33 */}
      <div className="ellipse-33"></div>

      {/* Ellipse 32 */}
      <div className="ellipse-32"></div>

      {/* Rectangle 44 */}
      <div className="rectangle-44">
        {/* Nakuru */}
        <div className="nakuru">Nakuru</div>

        {/* Users */}
        <div className="users">Users</div>

        {/* Worth */}
        <div className="worth">Worth</div>

        {/* 1575 */}
        <div className="_1575">1575</div>

        {/* Ksh 43,754 */}
        <div className="ksh-43754">Ksh 43,754</div>

        {/* Line 34 */}
        <div className="line-34"></div>
      </div>
      {/* Frame 316 */}
      <div className="frame-316">
        {/* Group 81 */}
        <div className="Group-81">
          {/* Rectangle 41 */}
          <div className="Rectangle-41">
            {/* Ellipse 30 */}
            <div className="Ellipse-30"></div>
          </div>
        </div>
        {/* > 500 */}
        <div className="greater-than-500">{">"} 500</div>
      </div>

      {/* Frame 315 */}
      <div className="frame-315">
        {/* Group 81 */}
        <div className="group-81-1">
          {/* Rectangle 41 */}
          <div className="rectangle-41-1">
            {/* Ellipse 30 */}
            <div className="ellipse-30-1"></div>
          </div>
        </div>
        {/* 100 - 500 */}
        <div className="one-hundred-to-five-hundred">100 - 500</div>
      </div>

      {/* Frame 314 */}
      <div className="frame-314">
        {/* Group 80 */}
        <div className="group-80-1">
          {/* Rectangle 43 */}
          <div className="rectangle-43-1">
            {/* Ellipse 31 */}
            <div className="ellipse-31-1"></div>
          </div>
        </div>
        {/* < 100 */}
        <div className="less-than-100">{"<"} 100</div>
      </div>
      <div className="frame-319">
        <div className="frame-317">
          <div className="National-reach">National Reach</div>
          <div className="twelve-counties">12 counties</div>
        </div>
        <div className="frame-318">
          <div className="total-users">Total Users</div>
          <div className="four-thousand-four-fifty">4,450</div>
        </div>
      </div>
      {/* Rectangle 25 */}
      <div id="rectangle-25"></div>

      {/* Recent Activity */}
      <div id="recent-activity">Recent Activity</div>

      {/* Frame 147 */}
      <div className="frame147-2">
        <div className="filter">Filter</div>
        <div className="filterIcon"></div>
      </div>

      {/* Name */}
      <div id="name">Name</div>

      {/* Frame 328 */}
      <div id="frame-328">
        <div id="balance">Balance</div>
        <div id="vector-328"></div>
      </div>

      {/* Frame 329 */}
      <div id="frame-329">
        <div id="transactions">Transactions</div>
        <div id="vector-329"></div>
      </div>

      {/* Frame 330 */}
      <div id="frame-330">
        <div id="app-launches">App Launches</div>
        <div id="vector-330"></div>
      </div>

      {/* Frame 331 */}
      <div id="frame-331">
        <div id="status">Status</div>
        <div id="vector-331"></div>
      </div>

      {/* Manage */}
      <div id="manage">Manage</div>
      <div id="frame-270">
        <div id="grace-mwai">Grace Mwai</div>
        <div id="peter-obi">Peter Obi</div>
        <div id="brian-nakamoto">Brian Nakamoto</div>
        <div id="john-doe">John Doe</div>
        <div id="chris-kiribi">Chris Kiribi</div>
        <div id="jacqueline-rop">Jacqueline Rop</div>
        <div id="chris-mganda">Chris Mganda</div>
        <div id="jane-mukenya">Jane Mukenya</div>
        <div id="janice-juma">Janice Juma</div>
        <div id="brianna-molly">Brianna Molly</div>
      </div>
      <div id="frame-326">
        <div id="ksh-450">Ksh 450</div>
        <div id="ksh-670">Ksh 670</div>
        <div id="ksh-50">Ksh 50</div>
        <div id="ksh-2334">Ksh 2,334</div>
        <div id="ksh-509">Ksh 509</div>
        <div id="ksh-1010">Ksh 1010</div>
        <div id="ksh-5000">Ksh 5000</div>
        <div id="ksh-150">Ksh 150</div>
        <div id="ksh-139">Ksh 139</div>
        <div id="ksh-423">Ksh 423</div>
      </div>
      <div id="frame-327">
        {/* 5 */}
        <div className="item-5">5</div>
        {/* 11 */}
        <div className="item-11">11</div>
        {/* 0 */}
        <div className="item-0">0</div>
        {/* 24 */}
        <div className="item-24">24</div>
        {/* 14 */}
        <div className="item-14">14</div>
        {/* 2 */}
        <div className="item-2">2</div>
        {/* 69 */}
        <div className="item-69">69</div>
        {/* 0 */}
        <div className="item-0-2">0</div>
        {/* 4 */}
        <div className="item-4">4</div>
        {/* 14 */}
        <div className="item-14-2">14</div>
      </div>
      <div className="frame-272" id="frame-272">
        <div className="item-10">10</div>
        <div className="item-29">29</div>
        <div className="item-2">2</div>
        <div className="item-55">55</div>
        <div className="item-38">38</div>
        <div className="item-6">6</div>
        <div className="item-102">102</div>
        <div className="item-0">0</div>
        <div className="item-23">23</div>
        <div className="item-30">30</div>
      </div>
      <div id="frame-273">
        <div className="active">Active</div>
        <div className="active1">Active</div>
        <div className="active2">Active</div>
        <div className="active3">Active</div>
        <div className="active4">Active</div>
        <div className="active5">Active</div>
        <div className="suspended">Suspended</div>
        <div className="active6">Active</div>
        <div className="suspended">Suspended</div>
        <div className="active7">Active</div>
        <div className="active8">Active</div>
      </div>
      <div className="container-274">
        <div className="group-57">
          <div className="Vector-i"></div>
          <div className="Ellipse-21"></div>
        </div>
        <div className="group-57">
          <div className="Vector-ii"></div>
          <div className="Ellipse-21-1"></div>
        </div>
        <div className="group-57">
          <div className="Vector-iii"></div>
          <div className="Ellipse-21-2"></div>
        </div>
        <div className="group-57">
          <div className="Vector-iv"></div>
          <div className="Ellipse-21-3"></div>
        </div>
        <div className="group-57">
          <div className="Vector-v"></div>
          <div className="Ellipse-21-4"></div>
        </div>
        <div className="group-57">
          <div className="Vector-vi"></div>
          <div className="Ellipse-21-5"></div>
        </div>
        <div className="group-57">
          <div className="Vector-vii"></div>
          <div className="Ellipse-21-6"></div>
        </div>
        <div className="group-57">
          <div className="Vector-viii"></div>
          <div className="Ellipse-21-7"></div>
        </div>
        <div className="group-57">
          <div className="Vector-viiii"></div>
          <div className="Ellipse-21-8"></div>
        </div>
        <div className="group-57">
          <div className="Vector-viiiii"></div>
          <div className="Ellipse-21-9"></div>
        </div>
        <div className="group-57">
          <div className="Vector-viiiiii"></div>
          <div className="Vector-xix"></div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
