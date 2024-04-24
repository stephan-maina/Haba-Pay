import React from "react";
import "./home1.css";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { BellOutlined } from "@ant-design/icons";

function home1() {
  return (
    <div className="frame-138">
      <div className="page-title">
        <Link to="/Home">
          <p className="HOME-1">Home</p>
        </Link>
      </div>
      <div className="frame-136-home-1"></div>
      <input className="Search-Input" type="text" placeholder="Search..." />
      <div className="search-container">
        <SearchOutlined className="search-icon" />
      </div>
      <div className="top-right-buttons"></div>
      <div className="vector-circle"></div>
      <div className="Ellipse-4"></div>
      <div className="user-dp-1"></div>
      <div className="mask-group"></div>
      <BellOutlined className="Unsplash-Img" />
      <div>
        <div className="Rectangle-23-home-1"></div>
        <div className="Vector-black-arrow-home-1"></div>
        <Link to="/Home">
          <p className="Back-home-1">Back</p>
        </Link>
        <div className="Group-65-home-1"></div>
        <div className="Ellipse-23-home-1"></div>
        <div className="JD-home-1">JD</div>
        <div className="Frame-240-home-1">
          <div className="John-Doe-home-1">John Doe</div>
          <div className="Vector-tick-home-1"></div>
        </div>
        <div className="Frame-239-home-1">
          <div className="Frame-236-home-1">
            <div className="union-home-1"></div>
            <div className="Doe-Designs-home-1">Doe Designs</div>
          </div>
          <div className="Frame-237-home-1">
            <div className="Vector-Machakos-home-1"></div>
            <div className="Machakos-Kenya-home-1">Machakos, Kenya</div>
          </div>
          <div className="Frame-238-home-1">
            <div className="Vector-Date-home-1"></div>
            <div className="Two-Feb-2023-home-1">2 Feb 2023</div>
          </div>
        </div>
      </div>
      <div className="Frame268-1-home-1">
        <div className="Duration-home-1">Duration</div>
        <div className="Divider-1-home-1">|</div>
        <div className="DropdownIcon1-home-1"></div>
      </div>
      <div className="Frame147-1-home-1">
        <div className="Transaction-home-1">Transaction</div>
        <div className="TransactionIcon-home-1"></div>
      </div>
      <div className="Frame267-1-home-1"></div>
      <div className="frame-267-home-1"></div>
      <div className="amt-y-axis-home-1">
        <div className="amt-500k-home-1">500k</div>
        <div className="amt-400k-home-1">400k</div>
        <div className="amt-300k-home-1">300k</div>
        <div className="amt-200k-home-1">200k</div>
        <div className="amt-100k-home-1">100k</div>
        <div className="amt-0-home-1">0</div>
      </div>
      <div className="frame-153-home-1">
        <div className="chart-grid-home-1"></div>
        <div className="x-axis-home-1">
          <div className="line-13-home-1"></div>
          <div className="line-14-home-1"></div>
          <div className="line-15-home-1"></div>
          <div className="line-16-home-1"></div>
          <div className="line-17-home-1"></div>
          <div className="line-18-home-1"></div>
        </div>
        <div className="y-axis-home-1">
          <div className="line-19-home-1"></div>
          <div className="line-20-home-1"></div>
          <div className="line-21-home-1"></div>
          <div className="line-22-home-1"></div>
          <div className="line-23-home-1"></div>
          <div className="line-24-home-1"></div>
          <div className="line-25-home-1"></div>
        </div>
        <div className="days-x-axis-home-1">
          <div className="sun">Sun</div>
          <div className="mon">Mon</div>
          <div className="tue">Tue</div>
          <div className="wed">Wed</div>
          <div className="thur">Thur</div>
          <div className="fri">Fri</div>
          <div className="sat">Sat</div>
        </div>
      </div>
      <div className="Rectangle-33-home-1"></div>
      <div className="Usage-Stats">Usage Stats</div>
      {/* Rectangle 25 */}
      <div className="rectangle-25-home-1"></div>

      {/* Recent Activity */}
      <div className="recent-activity-home-1">User Activity</div>

      {/* Frame 182 */}
      <div className="frame-182-home-1">
        {/* Frame 175 */}
        <div className="frame-175-home-1">
          {/* Frame 173 */}
          <div className="frame-173-home-1">
            {/* Grace Mwai created a HabaPay account */}
            <div className="Grace-Mwai">John Doe withdrew Ksh 50</div>
            <div className="today-01-07PM">1 March 2023, 01:07PM</div>
          </div>
          <div className="frame-174-home-1">
            <div className="review">Review</div>
            <div className="vector"></div>
          </div>
        </div>
        <div className="frame-176-home-1">
          <div className="frame-173-1-home-1">
            <div className="Jane-Mukenya">John Doe withdrew Ksh 240</div>
            <div className="today-12-45PM">26 Feb 2023, 12:45PM</div>
          </div>
          <div className="frame-174-1-home-1">
            <div className="review-1">Review</div>
            <div className="vector-arrow"></div>
          </div>
        </div>
        <div className="frame-177-home-1">
          <div className="frame-173-2-home-1">
            <div className="obi-peter">
              John Doe sent Ksh 110 to Chris Kiribi
            </div>
            <div className="today-12-00PM">24 Feb 2023, 12:00PM</div>
          </div>
          <div className="frame-174-2-home-1">
            <div className="review-2">Review</div>
            <div className="vector-arrow-2"></div>
          </div>
        </div>
        <div className="frame-178-home-1">
          <div className="frame-173-4-home-1">
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
        <div className="frame-179-home-1">
          <div className="frame-173-5-home-1">
            <div className="Bola-Tinubu">
              John Doe created a HabaPay account
            </div>
            <div className="today-11-00AM">Today, 11:05AM</div>
          </div>
          <div className="frame-174-5-home-1">
            <div className="review-5">Review</div>
            <div className="vector-arrow-5"></div>
          </div>
        </div>
      </div>

      {/* Frame 268 */}
      <div className="Frame268-2-home-1">
        {/* Duration */}
        <div className="Duration2-home-1">Duration</div>
        {/* Divider */}
        <div className="Divider-2-home-1">|</div>
        {/* Dropdown Icon */}
        <div className="DropdownIcon2-home-1"></div>
      </div>

      {/* Frame 147 */}
      <div className="Frame147-2-home-1">
        {/* Transaction */}
        <div className="Transaction2-home-1">Transaction</div>
        {/* Transaction Icon */}
        <div className="TransactionIcon2-home-1"></div>
      </div>
      {/* Rectangle 32 */}
      <div className="rectangle-32-home-1"></div>

      {/* Frame 262 */}
      <div className="frame-262-home-1">
        <div className="profile-home-1">Profile</div>
      </div>

      {/* Frame 263 */}
      <div className="frame-263-home-1">
        <div className="actions-home-1">Actions</div>
      </div>

      {/* Frame 264 */}
      <div className="frame-264-home-1">
        <div className="contact-home-1">Contact</div>
      </div>
      {/* Line 29 */}
      <div className="line-29-home-1"></div>

      {/* Frame 253 */}
      <div className="frame-253-home-1"></div>

      {/* Frame 248 */}
      <div className="frame-248-home-1"></div>

      {/* Group 66 */}
      <div className="group-66-home-1"></div>

      {/* Vector */}
      <div className="vector-email-home-1"></div>

      <div className="frame-243-home-1">
        {/* Email Label */}
        <label className="email-label-home-1">Email:</label>

        {/* Email Address */}
        <span className="email-address-home-1">johndoe@mail.com</span>
      </div>
      {/* Frame 249 */}
      <div className="frame-249-home-1"></div>

      {/* Group 67 */}
      <div className="group-67-home-1"></div>

      {/* Ellipse 24 */}
      <div className="ellipse-24-1-home-1"></div>

      {/* Vector */}
      <div className="vector-call-home-1"></div>

      {/* Frame 244 */}
      <div className="frame-244-home-1">
        {/* Primary Number */}
        <div className="primary-number-home-1">Primary Number:</div>
        {/* Phone Number */}
        <div className="phone-number-home-1">+254 723232323</div>
      </div>

      {/* Frame 250 */}
      <div className="frame-250-home-1"></div>

      {/* Group 68 */}
      <div className="group-68-home-1"></div>

      {/* Vector */}
      <div className="vector-dial-home-1"></div>

      <div className="frame-245-home-1">
        <label className="secondary-number-label-home-1">
          Secondary Number:
        </label>
        <span className="secondary-number-value-home-1">n/a</span>
      </div>

      {/* Frame 251 */}
      <div className="frame-251--home-1"></div>

      {/* Group 69 */}
      <div className="group-69-home-1"></div>

      {/* Union */}
      <div className="union-money-home-1"></div>

      <div className="frame-246-home-1">
        <div className="account-balance-label-home-1">Account Balance:</div>
        <div className="account-balance-value-home-1">Ksh 2,334.00</div>
      </div>
      {/* Line 31 */}
      <div className="line-31-home-1"></div>

      {/* Frame 257 */}
      <div className="frame-257-home-1">
        <div className="group-74-home-1">
          <div className="vector-profile-home-1"></div>
        </div>
        <div className="edit-profile-home-1">Edit Profile</div>
      </div>

      {/* Frame 255 */}
      <div className="frame-255-home-1">
        <div className="group-72-home-1">
          <div className="vector-suspend-home-1"></div>
        </div>
        <div className="suspend-home-1">Suspend</div>
      </div>

      {/* Frame 254 */}
      <div className="frame-254-home-1">
        <div className="group-73-home-1">
          <div className="vector-delete-home-1"></div>
        </div>
        <Link to="/Delete">
          <p className="delete-home-1">Delete</p>
        </Link>
      </div>
    </div>
  );
}

export default home1;
