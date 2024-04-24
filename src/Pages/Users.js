import React, { useState } from "react";
import "./Users.css";
import { Link } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { BellOutlined } from "@ant-design/icons";
import { BorderOutlined, CheckSquareFilled } from "@ant-design/icons";

function Users() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedc, setIsCheckedc] = useState(false);
  const [isCheckedd, setIsCheckedd] = useState(false);
  const [isCheckede, setIsCheckede] = useState(false);
  const [isCheckedf, setIsCheckedf] = useState(false);
  const [isCheckedg, setIsCheckedg] = useState(false);
  const [isCheckedh, setIsCheckedh] = useState(false);
  const [isCheckedI, setIsCheckedI] = useState(false);
  const [isCheckedj, setIsCheckedj] = useState(false);
  const [isCheckedk, setIsCheckedk] = useState(false);

  const updateSelectedCount = (isChecked, count) => {
    if (isChecked) {
      setSelectedCount(count + 1);
    } else {
      setSelectedCount(count - 1);
    }
  };

  const handleIconClick = () => {
    setIsChecked(!isChecked);
    updateSelectedCount(!isChecked, selectedCount);
  };

  const handleIconClickc = () => {
    setIsCheckedc(!isCheckedc);
    updateSelectedCount(!isCheckedc, selectedCount);
  };

  const handleIconClickd = () => {
    setIsCheckedd(!isCheckedd);
    updateSelectedCount(!isCheckedd, selectedCount);
  };

  const handleIconClicke = () => {
    setIsCheckede(!isCheckede);
    updateSelectedCount(!isCheckede, selectedCount);
  };

  const handleIconClickf = () => {
    setIsCheckedf(!isCheckedf);
    updateSelectedCount(!isCheckedf, selectedCount);
  };

  const handleIconClickg = () => {
    setIsCheckedg(!isCheckedg);
    updateSelectedCount(!isCheckedg, selectedCount);
  };

  const handleIconClickh = () => {
    setIsCheckedh(!isCheckedh);
    updateSelectedCount(!isCheckedh, selectedCount);
  };

  const handleIconClickI = () => {
    setIsCheckedI(!isCheckedI);
    updateSelectedCount(!isCheckedI, selectedCount);
  };

  const handleIconClickj = () => {
    setIsCheckedj(!isCheckedj);
    updateSelectedCount(!isCheckedj, selectedCount);
  };

  const handleIconClickk = () => {
    setIsCheckedk(!isCheckedk);
    updateSelectedCount(!isCheckedk, selectedCount);
  };

  return (
    <div className="frame-138">
      <div className="page-title">
        <div className="home-1">Manage Users</div>
      </div>
      <div className="frame-136-user"></div>
      <input className="Search-Input" type="text" placeholder="Search..." />
      <div className="search-container">
        <SearchOutlined className="search-icon" />
      </div>

      <div className="top-right-buttons"></div>
      <div className="vector-circle"></div>
      <div className="ellipse-4"></div>
      <div className="user-dp-1"></div>
      <div className="mask-group"></div>
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
          <div className="frame-121-Users">
            <div className="vector-Home"></div>
            <Link to="/Home">
              <p className="Home">Home</p>
            </Link>
          </div>
          <div className="frame-122">
            <div className="union"></div>
            <Link to="/Analytics">
              <p className="analytics">Analytics</p>
            </Link>
          </div>
          <div className="frame-123-users-1">
            <div className="Vector-Manager-Users"></div>
            <Link to="/Manage">
              <p className="manage-Users">Manage Users</p>
            </Link>
          </div>
          <div className="Frame-123-Users">
            <div className="vector4"></div>
            <Link to="/Settings">
              <p className="Settings-Manage">Settings</p>
            </Link>
            <div className="vector5"></div>
            <Link to="/">
              <p className="logout">Log out</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="Rectangle23">
        {/* Users */}
        <div className="Users">Users</div>
        {/* Frame 268 */}
        <div className="Frame268">
          {/* Quick Actions */}
          <div className="QuickActions">Quick Actions</div>
          {/* | */}
          <div className="Divider">|</div>
          {/* gridicons:dropdown */}
          <div className="DropdownIcon"></div>
        </div>
        {/* Frame 147 */}
        <div className="Frame147">
          {/* Filter */}
          <div className="Filter">Filter</div>
          {/* material-symbols:filter-list-rounded */}
          <div className="FilterIcon"></div>
        </div>
        {/* Frame 267 */}
        <div className="Frame267">
          {/* Vector */}
          <div className="Vector-1"></div>
          {/* 20 - 30 of 4,550 */}
          <div className="PageInfo">20 - 30 of 4,550</div>
          {/* Vector */}
          <div className="Vector-2"></div>
        </div>
      </div>
      <div className="container">
        <div className="table-data"></div>
        <div className="positioned-frame"></div>
        <div className="positioned-frame-283">
          <div className="vector-a"></div>
        </div>
        <div className="vector-b-manage" onClick={handleIconClick}>
          <BorderOutlined className="border-icon" />
          {isChecked && <CheckSquareFilled className="check-square-icon" />}
        </div>
        <div className="vector-c-manage" onClick={handleIconClickc}>
          <BorderOutlined className="border-icon" />
          {isCheckedc && <CheckSquareFilled className="check-square-icon" />}
        </div>
        <div className="vector-d-manage" onClick={handleIconClickd}>
          <BorderOutlined className="border-icon" />
          {isCheckedd && <CheckSquareFilled className="check-square-icon" />}
        </div>
        <div className="vector-e-manage" onClick={handleIconClicke}>
          <BorderOutlined className="border-icon" />
          {isCheckede && <CheckSquareFilled className="check-square-icon" />}
        </div>
        <div className="vector-f-manage" onClick={handleIconClickf}>
          <BorderOutlined className="border-icon" />
          {isCheckedf && <CheckSquareFilled className="check-square-icon" />}
        </div>
        <div className="vector-g-manage" onClick={handleIconClickg}>
          <BorderOutlined className="border-icon" />
          {isCheckedg && <CheckSquareFilled className="check-square-icon" />}
        </div>
        <div className="vector-h-manage" onClick={handleIconClickh}>
          <BorderOutlined className="border-icon" />
          {isCheckedh && <CheckSquareFilled className="check-square-icon" />}
        </div>
        <div className="vector-I-manage" onClick={handleIconClickI}>
          <BorderOutlined className="border-icon" />
          {isCheckedI && <CheckSquareFilled className="check-square-icon" />}
        </div>
        <div className="vector-j-manage" onClick={handleIconClickj}>
          <BorderOutlined className="border-icon" />
          {isCheckedj && <CheckSquareFilled className="check-square-icon" />}
        </div>
        <div className="vector-k-manage" onClick={handleIconClickk}>
          <BorderOutlined className="border-icon" />
          {isCheckedk && <CheckSquareFilled className="check-square-icon" />}
        </div>
      </div>
      {/* Add this part to display the selected count */}
      {selectedCount > 0 && (
        <div className="selected-count-manage">
          {selectedCount} {selectedCount === 1 ? "User" : "Users"} selected.
        </div>
      )}
      <div className="container">
        {/* Frame 281 */}
        <div className="Name">Name</div>
        {/* Frame 270 */}
        <div className="container-270">
          <div className="name-font grace-mwai">Grace Mwai</div>
          <div className="name-font peter-obi">Peter Obi</div>
          <div className="name-font brian-nakamoto">Brian Nakamoto</div>
          <div className="name-font john-doe">John Doe</div>
          <div className="name-font chris-kiribi">Chris Kiribi</div>
          <div className="name-font jacqueline-rop">Jacqueline Rop</div>
          <div className="name-font chris-mganda">Chris Mganda</div>
          <div className="name-font jane-mukenya">Jane Mukenya</div>
          <div className="name-font janice-juma">Janice Juma</div>
          <div className="name-font brianna-molly">Brianna Molly</div>
        </div>
      </div>
      <div className="container-280">
        {/* Number */}
        <div className="Number">Number</div>
      </div>

      {/* Frame 269 */}
      <div className="container-269">
        <div className="phone-number-1">+254 725346448</div>
        <div className="phone-number-2">+254 747940078</div>
        <div className="phone-number-3">+254 712345678</div>
        <div className="phone-number-4">+254 766675678</div>
        <div className="phone-number-5">+254 710003678</div>
        <div className="phone-number-6">+254 722342314</div>
        <div className="phone-number-7">+254 712999090</div>
        <div className="phone-number-8">+254 700345678</div>
        <div className="phone-number-9">+254 724345474</div>
        <div className="phone-number-10">+254 712345678</div>
      </div>
      {/* */}
      <div className="Email">Email</div>
      <div className="container-271">
        <div className="Email email-1">gracemwai444@haba.co.ke</div>
        <div className="Email email-2">obidientpeter@state.ng</div>
        <div className="Email email-3">briannakamoto@mail.com</div>
        <div className="Email email-4">johndoe@mail.com</div>
        <div className="Email email-5">chriskiribi@mail.com</div>
        <div className="Email email-6">jacquelinerop@mail.com</div>
        <div className="Email email-7">chrismganda@mail.com</div>
        <div className="Email email-8">janemukenya@mail.com</div>
        <div className="Email email-9">janicejuma@mail.com</div>
        <div className="Email email-10">briannamolly@mail.com</div>
      </div>
      <div className="container-272">
        <div className="Balance">Balance (Ksh)</div>
        <div className="balance-1">Ksh 450</div>
        <div className="balance-2">Ksh 670</div>
        <div className="balance-3">Ksh 50</div>
        <div className="balance-4">Ksh 2,334</div>
        <div className="balance-5">Ksh 509</div>
        <div className="balance-6">Ksh 1010</div>
        <div className="balance-7">Ksh 5000</div>
        <div className="balance-8">Ksh 150</div>
        <div className="balance-9">Ksh 139</div>
        <div className="balance-10">Ksh 423</div>
      </div>
      <div className="Manage">Manage</div>
      {/* Frame 274 */}
      <div className="container-274-user">
        {/* Group 57 */}
        <div className="group-57-user">
          {/* Vector */}
          <div className="vector-i-user"></div>
          {/* Ellipse 21 */}
          <div className="ellipse-21-user"></div>
        </div>
        {/* Group 57 */}
        <div className="group-57user">
          {/* Vector */}
          <div className="vector-ii-user"></div>
          {/* Ellipse 21 */}
          <div className="ellipse-21-1-user"></div>
        </div>
        {/* Group 57 */}
        <div className="group-57-user">
          {/* Vector */}
          <div className="vector-iii-user"></div>
          {/* Ellipse 21 */}
          <div className="ellipse-21-2-user"></div>
        </div>
        {/* Group 57 */}
        <div className="group-57-user">
          {/* Vector */}
          <div className="vector-iv-user"></div>
          {/* Ellipse 21 */}
          <div className="ellipse-21-3-user"></div>
        </div>
        {/* Group 57 */}
        <div className="group-57-user">
          {/* Vector */}
          <div className="vector-v-user"></div>
          {/* Ellipse 21 */}
          <div className="ellipse-21-4-user"></div>
        </div>
        {/* Group 57 */}
        <div className="group-57-user">
          {/* Vector */}
          <div className="vector-vi-user"></div>
          {/* Ellipse 21 */}
          <div className="ellipse-21-5-user"></div>
        </div>
        {/* Group 57 */}
        <div className="group-57-user">
          {/* Vector */}
          <div className="vector-vii-user"></div>
          {/* Ellipse 21 */}
          <div className="ellipse-21-6-user"></div>
        </div>
        {/* Group 57 */}
        <div className="group-57-user">
          {/* Vector */}
          <div className="vector-viii-user"></div>
          {/* Ellipse 21 */}
          <div className="ellipse-21-7-user"></div>
        </div>
        {/* Group 57 */}
        <div className="group-57-user">
          {/* Vector */}
          <div className="vector-viiii-user"></div>
          {/* Ellipse 21 */}
          <div className="ellipse-21-8-user"></div>
        </div>
        {/* Group 57 */}
        <div className="group-57-user">
          {/* Vector */}
          <div className="vector-viiiii-user"></div>
          {/* Ellipse 21 */}
          <div className="ellipse-21-9-user"></div>
        </div>
      </div>

      <div className="Status">Status</div>
      <div className="container-273">
        <div className="Status status-1">Active</div>
        <div className="Status status-2">Active</div>
        <div className="Status status-3">Active</div>
        <div className="Status status-4">Active</div>
        <div className="Status status-5">Suspended</div>
        <div className="Status status-6">Active</div>
        <div className="Status status-7">Suspended</div>
        <div className="Status status-8">Active</div>
        <div className="Status status-9">Active</div>
        <div className="Status status-10">Active</div>
      </div>
      {/* Rectangle 26 */}
      <div className="rectangle-26"></div>

      {/* Frame 170 */}
      <div className="frame-170">
        <div className="new-users">New Users</div>

        {/* Frame 169 */}
        <div className="frame-169">
          <div className="view-all">View All</div>
          <div className="vectorA"></div>
        </div>
      </div>

      {/* Frame 171 */}
      <div className="frame-171"></div>

      {/* 5th March 2023 */}
      <div className="date-label">5th March 2023</div>

      {/* Frame 54 */}
      <div className="frame-54">
        {/* Frame 14 */}
        <div className="frame-14">
          {/* Group 53 */}
          <div className="group-53">
            {/* Grace Mwai */}
            <div className="Grace-mwai">Grace Mwai</div>
            {/* gracemwai444@haba.co.ke */}
            <div className="grace-email">gracemwai444@haba.co.ke</div>
            {/* Vector */}
            <div className="vector-1"></div>
          </div>
        </div>

        {/* Frame 165 */}
        <div className="frame-165">
          {/* Bola Tinubu */}
          <div className="bola-tinubu">Bola Tinubu</div>
          {/* bolatinubu00@outlook.com */}
          <div className="bola-email">bolatinubu00@outlook.com</div>
          {/* Vector */}
          <div className="vector-2"></div>
        </div>

        {/* Frame 166 */}
        <div className="frame-166">
          {/* Nancy Wajacoki */}
          <div className="nancy-wajacoki">Nancy Wajacoki</div>
          {/* nancywajacoki22@yahoo.com */}
          <div className="nancy-email">nancywajacoki22@yahoo.com</div>
          {/* Vector */}
          <div className="vector-3"></div>
        </div>

        {/* Frame 167 */}
        <div className="frame-167">
          {/* Peter Obi */}
          <div className="Peter-obi">Peter Obi</div>
          {/* obidientpeter@state.ng */}
          <div className="peter-email">obidientpeter@state.ng</div>
          {/* Vector */}
          <div className="vector-4"></div>
        </div>

        {/* Frame 168 */}
        <div className="frame-168">
          {/* Client Mwilu */}
          <div className="client-mwilu">Client Mwilu</div>
          {/* clientmwilu@gmail.com */}
          <div className="client-email">clientmwilu@gmail.com</div>
          {/* Vector */}
          <div className="vector-5"></div>
        </div>
      </div>
      <div className="Line-16"></div>
      <div className="Line-17"></div>
      <div className="Line-18"></div>
      <div className="Line-19"></div>
      <div className="Line-20"></div>
      <div className="Line-21"></div>
      <div className="Line-22"></div>
      <div className="Line-23"></div>
      <div className="Line-24"></div>
      <div className="Line-25"></div>
      <div className="Line-26"></div>
      <div className="Line-27"></div>
      <div className="rectangle-25-user"></div>
      <div className="recent-activity-user">User Activity</div>
      <div className="frame-182-user">
        <div className="frame-175-user">
          <div className="frame-173-user">
            <div className="Grace-Mwai">John Doe withdrew Ksh 50</div>
            <div className="today-01-07PM">1 March 2023, 01:07PM</div>
          </div>
          <div className="frame-174">
            <div className="review">Review</div>
            <div className="vector"></div>
          </div>
        </div>
        <div className="frame-176">
          <div className="frame-173-1">
            <div className="Jane-Mukenya">John Doe withdrew Ksh 240</div>
            <div className="today-12-45PM">26 Feb 2023, 12:45PM</div>
          </div>
          <div className="frame-174-1">
            <div className="review-1">Review</div>
            <div className="vector-arrow"></div>
          </div>
        </div>
        <div className="frame-177">
          <div className="frame-173-2">
            <div className="obi-peter">
              John Doe sent Ksh 110 to Chris Kiribi
            </div>
            <div className="today-12-00PM">24 Feb 2023, 12:00PM</div>
          </div>
          <div className="frame-174-2">
            <div className="review-2">Review</div>
            <div className="vector-arrow-2"></div>
          </div>
        </div>
        <div className="frame-178">
          <div className="frame-173-4">
            <div className="Bola-tinubu">
              John Doe deposited Ksh 500 to wallet
            </div>
            <div className="today-11-05AM">24 Feb 2023, 11:55AM</div>
          </div>
          <div className="frame-174-4">
            <div className="review-4">Review</div>
            <div className="vector-arrow-4"></div>
          </div>
        </div>
        <div className="frame-179">
          <div className="frame-173-5">
            <div className="Bola-Tinubu-user">
              John Doe created a HabaPay account
            </div>
            <div className="today-11-00AM">Today, 11:05AM</div>
          </div>
          <div className="frame-174-5">
            <div className="review-5">Review</div>
            <div className="vector-arrow-5"></div>
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
      {/* Frame 268 */}
      <div className="Frame268-1">
        {/* Duration */}
        <div className="Duration">Duration</div>
        {/* | */}
        <div className="Divider-1">|</div>
        {/* gridicons:dropdown */}
        <div className="DropdownIcon1"></div>
      </div>

      {/* Frame 147 */}
      <div className="Frame147-1">
        {/* Transaction */}
        <div className="Transaction">Transaction</div>
        {/* material-symbols:filter-list-rounded */}
        <div className="TransactionIcon"></div>
      </div>

      {/* Frame 267 */}
      <div className="Frame267-1">
        {/* Vector */}
        <div className="Vector-Duration"></div>
        {/* 1 of 3*/}
        <div className="PageNo">1 of 3</div>
        {/* Vector */}
        <div className="Vector-Transaction"></div>
      </div>
    </div>
  );
}

export default Users;
