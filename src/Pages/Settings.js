import React, { useState } from "react";
import "./Settings.css";
import { Link } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { SettingOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { BellOutlined } from "@ant-design/icons";
import { BorderOutlined, CheckSquareFilled } from "@ant-design/icons";

function Settings() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedCount1, setSelectedCount1] = useState(0);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isCheckedA, setIsCheckedA] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);
  const [isCheckedC, setIsCheckedC] = useState(false);
  const [isCheckedD, setIsCheckedD] = useState(false);
  const [isCheckedE, setIsCheckedE] = useState(false);
  const [isCheckedF, setIsCheckedF] = useState(false);
  const [isCheckedG, setIsCheckedG] = useState(false);
  const [isCheckedH, setIsCheckedH] = useState(false);
  const [isCheckedI, setIsCheckedI] = useState(false);
  const [isCheckedJ, setIsCheckedJ] = useState(false);
  const [isCheckedK, setIsCheckedK] = useState(false);
  const [isCheckedL, setIsCheckedL] = useState(false);
  const [isCheckedM, setIsCheckedM] = useState(false);
  const [isCheckedN, setIsCheckedN] = useState(false);
  const [isCheckedO, setIsCheckedO] = useState(false);

  const updateSelectedCount = (isChecked, count) => {
    if (isChecked) {
      setSelectedCount(count + 1);
    } else {
      setSelectedCount(count - 1);
    }
  };

  const updateSelectedCount1 = (isChecked, count) => {
    if (isChecked) {
      setSelectedCount1(count + 1);
    } else {
      setSelectedCount1(count - 1);
    }
  };

  const handleIconClick2 = () => {
    setIsChecked2(!isChecked2);
    updateSelectedCount(!isChecked2, selectedCount);
  };

  const handleIconClick3 = () => {
    setIsChecked3(!isChecked3);
    updateSelectedCount(!isChecked3, selectedCount);
  };

  const handleIconClick4 = () => {
    setIsChecked4(!isChecked4);
    updateSelectedCount(!isChecked4, selectedCount);
  };

  const handleIconClickA = () => {
    setIsCheckedA(!isCheckedA);
    updateSelectedCount1(!isCheckedA, selectedCount1);
  };

  const handleIconClickB = () => {
    setIsCheckedB(!isCheckedB);
    updateSelectedCount1(!isCheckedB, selectedCount1);
  };

  const handleIconClickC = () => {
    setIsCheckedC(!isCheckedC);
    updateSelectedCount1(!isCheckedC, selectedCount1);
  };

  const handleIconClickD = () => {
    setIsCheckedD(!isCheckedD);
    updateSelectedCount1(!isCheckedD, selectedCount1);
  };

  const handleIconClickE = () => {
    setIsCheckedE(!isCheckedE);
    updateSelectedCount1(!isCheckedE, selectedCount1);
  };

  const handleIconClickF = () => {
    setIsCheckedF(!isCheckedF);
    updateSelectedCount1(!isCheckedF, selectedCount1);
  };

  const handleIconClickG = () => {
    setIsCheckedG(!isCheckedG);
    updateSelectedCount1(!isCheckedG, selectedCount1);
  };

  const handleIconClickH = () => {
    setIsCheckedH(!isCheckedH);
    updateSelectedCount1(!isCheckedH, selectedCount1);
  };

  const handleIconClickI = () => {
    setIsCheckedI(!isCheckedI);
    updateSelectedCount1(!isCheckedI, selectedCount1);
  };

  const handleIconClickJ = () => {
    setIsCheckedJ(!isCheckedJ);
    updateSelectedCount1(!isCheckedJ, selectedCount1);
  };

  const handleIconClickK = () => {
    setIsCheckedK(!isCheckedK);
    updateSelectedCount1(!isCheckedK, selectedCount1);
  };

  const handleIconClickL = () => {
    setIsCheckedL(!isCheckedL);
    updateSelectedCount1(!isCheckedL, selectedCount1);
  };

  const handleIconClickM = () => {
    setIsCheckedM(!isCheckedM);
    updateSelectedCount1(!isCheckedM, selectedCount1);
  };

  const handleIconClickN = () => {
    setIsCheckedN(!isCheckedN);
    updateSelectedCount1(!isCheckedN, selectedCount1);
  };

  const handleIconClickO = () => {
    setIsCheckedO(!isCheckedO);
    updateSelectedCount1(!isCheckedO, selectedCount1);
  };

  return (
    <div>
      <div className="frame-138">
        <div className="page-title">
          <div className="Home-Settings">Settings</div>
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
            <div className="frame-121-Settings">
              <div className="vector-home"></div>
              <Link to="/Home">
                <p className="Home">Home</p>
              </Link>
            </div>
            <div className="frame-122">
              <div className="union-Settings"></div>
              <Link to="/Analytics">
                <p className="analytics">Analytics</p>
              </Link>
            </div>
            <div className="frame-123">
              <div className="vector-Manager"></div>
              <Link to="/Manage">
                <p className="Manage-Users">Manage Users</p>
              </Link>
              <div className="vector5"></div>
              <Link to="/">
                <p className="logout">Log out</p>
              </Link>
            </div>
            <div className="frame-123-Settings">
              <div className="vector4-Settings">
                <SettingOutlined />
              </div>

              <p className="Settings">Settings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Rectangle-23"></div>
      <div className="Vector-black-arrow"></div>
      <div className="Back">Back</div>
      <div className="Group-65"></div>
      <div className="Ellipse-23"></div>
      <div className="JD">JD</div>
      <div className="Frame-240">
        <div className="James-Nakamoto">James Nakamoto</div>
        <div className="Vector-crown"></div>
      </div>
      <div className="Frame-239">
        <div className="Frame-236">
          <div className="Union"></div>
          <div className="HabaPay">HabaPay</div>
        </div>
        <div className="Frame-237">
          <div className="Vector-Nairobi"></div>
          <div className="Nairobi-Kenya">Nairobi, Kenya</div>
        </div>
        <div className="Frame-238">
          <div className="Vector-Date"></div>
          <div className="Jan-12-2023">12 Jan 2023</div>
        </div>
      </div>
      {/* Frame 262 */}
      <div className="box-sizing frame-262">
        <div className="profile">Profile</div>
      </div>

      {/* Frame 263 */}
      <div className="frame-263">
        <div className="notifications">Notifications</div>
      </div>

      {/* Frame 264 */}
      <div className="frame-264">
        <div className="general">General</div>
      </div>
      {/* Rectangle 33 */}
      <div className="rectangle-33">
        <div className="frame-313">
          {/* Notification */}
          <div className="notification">Notification</div>
        </div>

        <div className="frame-299">
          {/* Allow browser notifications */}
          <div className="allow-browser-notifications">
            Allow browser notifications
          </div>
        </div>
        {/* Rectangle 34 */}
        <div className="rectangle-34"></div>
      </div>
      {/* Type */}
      <div className="type position-1">Type</div>
      <div className="type bold black position-2">Browser</div>
      <div className="type black position-3">Email</div>
      <div className="type black position-4">Text</div>
      {/* Rectangle 37 */}
      <div className="rectangle-37"></div>
      {/* When user makes a withdrawal request */}
      <div className="withdrawal-request">
        When user makes a withdrawal request
      </div>
      <div className="VECTOR vector-Tick1" onClick={handleIconClickA}>
        <BorderOutlined className="border-icon" />
        {isCheckedA && <CheckSquareFilled className="check-square-icon" />}
      </div>
      <div className="VECTOR vector-Tick2" onClick={handleIconClickB}>
        <BorderOutlined className="border-icon" />
        {isCheckedB && <CheckSquareFilled className="check-square-icon" />}
      </div>
      <div className="VECTOR vector-Tick3" onClick={handleIconClickC}>
        <BorderOutlined className="border-icon" />
        {isCheckedC && <CheckSquareFilled className="check-square-icon" />}
      </div>
      {/* Rectangle 38 */}
      <div className="rectangle-38"></div>
      {/* When user makes a deposit into the account */}
      <div className="Deposit-account">
        When user makes a deposit into the account
      </div>
      <div className="VECTOR-1 vector-Tick4" onClick={handleIconClickD}>
        <BorderOutlined className="border-icon" />
        {isCheckedD && <CheckSquareFilled className="check-square-icon" />}
      </div>
      <div className="VECTOR-1 vector-Tick5" onClick={handleIconClickE}>
        <BorderOutlined className="border-icon" />
        {isCheckedE && <CheckSquareFilled className="check-square-icon" />}
      </div>
      <div className="VECTOR-1 vector-Tick6" onClick={handleIconClickF}>
        <BorderOutlined className="border-icon" />
        {isCheckedF && <CheckSquareFilled className="check-square-icon" />}
      </div>
      {/* Rectangle 39 */}
      <div className="rectangle-39"></div>
      {/* When user makes a transfer */}
      <div className="Transfer-account">When user makes a transfer</div>
      <div className="VECTOR-2 vector-Tick7" onClick={handleIconClickG}>
        <BorderOutlined className="border-icon" />
        {isCheckedG && <CheckSquareFilled className="check-square-icon" />}
      </div>
      <div className="VECTOR-2 vector-Tick8" onClick={handleIconClickH}>
        <BorderOutlined className="border-icon" />
        {isCheckedH && <CheckSquareFilled className="check-square-icon" />}
      </div>
      <div className="VECTOR-2 vector-Tick9" onClick={handleIconClickI}>
        <BorderOutlined className="border-icon" />
        {isCheckedI && <CheckSquareFilled className="check-square-icon" />}
      </div>
      {/* Rectangle 36 */}
      <div className="rectangle-36"></div>
      {/* When a new user creates an account */}
      <div className="Create-account">When a new user creates an account</div>
      <div className="VECTOR-3 vector-Tick10" onClick={handleIconClickJ}>
        <BorderOutlined className="border-icon" />
        {isCheckedJ && <CheckSquareFilled className="check-square-icon" />}
      </div>
      <div className="VECTOR-3 vector-Tick11" onClick={handleIconClickK}>
        <BorderOutlined className="border-icon" />
        {isCheckedK && <CheckSquareFilled className="check-square-icon" />}
      </div>
      <div className="VECTOR-3 vector-Tick12" onClick={handleIconClickL}>
        <BorderOutlined className="border-icon" />
        {isCheckedL && <CheckSquareFilled className="check-square-icon" />}
      </div>
      {/* Updates profile */}
      <div className="Updates-profile">When a user updates profile</div>
      <div className="VECTOR-4 vector-Tick13" onClick={handleIconClickM}>
        <BorderOutlined className="border-icon" />
        {isCheckedM && <CheckSquareFilled className="check-square-icon" />}
      </div>
      <div className="VECTOR-4 vector-Tick14" onClick={handleIconClickN}>
        <BorderOutlined className="border-icon" />
        {isCheckedN && <CheckSquareFilled className="check-square-icon" />}
      </div>
      <div className="VECTOR-4 vector-Tick15" onClick={handleIconClickO}>
        <BorderOutlined className="border-icon" />
        {isCheckedO && <CheckSquareFilled className="check-square-icon" />}
      </div>
      {/* Rectangle 33 */}
      <div className="rectangle-33-1">
        <div className="frame-313-1">
          {/* Notification */}
          <div className="Manage-Devices">Manage Devices</div>
        </div>
        {/* Add this part to display the selected count */}
        {selectedCount1 > 0 && (
          <div className="selected-count-Tick">
            {selectedCount1}{" "}
            {selectedCount1 === 1 ? "Notification" : "Notifications"} selected.
          </div>
        )}
        <div className="frame-299-1">
          {/* Allow browser notifications */}
          <div className="Logout-of-selected-devices">
            Logout of selected devices
          </div>
        </div>
        {/* Rectangle 34 */}
        <div className="rectangle-34-1"></div>
      </div>

      {/* Type */}
      <div className="type Position-1">Browser</div>
      <div className="type bold black Position-2">Device</div>
      <div className="type black Position-3">Location</div>
      <div className="type black Position-4">Last Seen</div>
      {/* Vector 1 */}
      <div className="vector-box-1"></div>
      {/* Vector 2 */}
      <div className="vector-box-2" onClick={handleIconClick2}>
        <BorderOutlined className="border-icon" />
        {isChecked2 && <CheckSquareFilled className="check-square-icon" />}
      </div>
      {/* Vector 3 */}
      <div className="vector-box-3" onClick={handleIconClick3}>
        <BorderOutlined className="border-icon" />
        {isChecked3 && <CheckSquareFilled className="check-square-icon" />}
      </div>
      {/* Vector 4 */}
      <div className="vector-box-4" onClick={handleIconClick4}>
        <BorderOutlined className="border-icon" />
        {isChecked4 && <CheckSquareFilled className="check-square-icon" />}
      </div>
      {/* Add this part to display the selected count */}
      {selectedCount > 0 && (
        <div className="selected-count">
          {selectedCount} {selectedCount === 1 ? "Device" : "Devices"} selected.
        </div>
      )}
      {/* Rectangle 37 Android */}
      <div className="Rectangle-37-Android"></div>

      {/* Chrome on Android */}
      <div className="chrome-android">Chrome on Android</div>

      {/* Samsung A51 */}
      <div className="samsung-a51">Samsung A51</div>

      {/* Kangemi in Nairobi, Kenya */}
      <div className="kangemi-nairobi">Kangemi in Nairobi, Kenya</div>

      {/* Online */}
      <div className="online">Online</div>

      {/* Rectangle 37 Windows */}
      <div className="Rectangle-37-Windows"></div>

      {/* Chrome on Windows */}
      <div className="chrome-windows">Chrome on Windows</div>

      {/* HP Folio 9480m */}
      <div className="hp-folio">HP Folio 9480m</div>

      {/* Machakos in Machakos, Kenya */}
      <div className="machakos">Machakos in Machakos, Kenya</div>

      {/* 4 hours ago */}
      <div className="hours-ago">4 hours ago</div>

      {/* Rectangle 37 Avast */}
      <div className="Rectangle-37-Avast"></div>

      {/* Avast on Windows */}
      <div className="avast-windows">Avast on Windows</div>

      {/* Lenovo Yoga 370 */}
      <div className="lenovo-yoga">Lenovo Yoga 370</div>

      {/* Ruiru in Thika, Kenya */}
      <div className="ruiru">Ruiru in Thika, Kenya</div>

      {/* 4 Feb 2023 */}
      <div className="feb-4-2023">4 Feb 2023</div>
    </div>
  );
}

export default Settings;
