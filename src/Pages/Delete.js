import React from "react";
import "./Delete.css";
import { Link } from "react-router-dom";

const Delete = () => {
  return (
    <div className="frame-295-Delete">
      <div className="ConfirmDelete">Confirm Delete</div>
      <div className="frame-294-Delete">
        <div className="vector-tick-Delete"></div>
        <div className="personal-details-Delete">Personal Details</div>
        <div className="frame-292-Delete">
          <div className="frame-290-Delete">
            <div className="name-Delete">Name:</div>
            <div className="email-Delete">Email:</div>
            <div className="Number-Delete">Number:</div>
            <div className="Location-Delete">Location:</div>
          </div>
          <div className="frame-291-Delete">
            <div className="john-doe-Delete">John Doe</div>
            <div className="johndoe-mail-com-Delete">johndoe@mail.com</div>
            <div className="number-Delete">254 766675678</div>
            <div className="location-Delete">Machakos, Kenya</div>
          </div>
        </div>
      </div>
      <div className="frame-289-Delete">
        {/* Account Details */}
        <div className="account-details-Delete">Account Details</div>

        {/* Frame 288 */}
        <div className="frame-288-Delete">
          {/* Frame 287 */}
          <div className="frame-287-Delete">
            {/* Status */}
            <div className="status-Delete">Status:</div>
            {/* Balance */}
            <div className="balance-Delete">Balance:</div>
            {/* Business */}
            <div className="business-Delete">Business:</div>
            {/* Created */}
            <div className="created-Delete">Created:</div>
          </div>

          {/* Frame 286 */}
          <div className="frame-286-Delete">
            {/* Active */}
            <div className="active-Delete">Active</div>
            {/* Ksh 00.00 */}
            <div className="ksh-Delete">Ksh 00.00</div>
            {/* n/a */}
            <div className="na-Delete">n/a</div>
            {/* 2 Feb 2023 */}
            <div className="date-Delete">2 Feb 2023</div>
          </div>
          <div className="frame-293-Delete">
            <div className="other-actions-Delete">Other Actions</div>
            <div className="frame-212-Delete">
              <div className="frame-199-Delete">
                <div className="vector-Delete-1"></div>
                <div className="edit-profile-Delete">Edit Profile</div>
              </div>
              <div className="frame-58-Delete-2">
                <div className="vector-Delete-2"></div>
                <div className="suspend-Delete">Suspend</div>
              </div>
              <div className="frame-58-Delete-3">
                <div className="vector-Delete-3"></div>
                <div className="contact-Delete">Contact</div>
              </div>
              <div className="frame-295-Delete2">
                {/* Vector */}
                <div className="vector-tick-Delete2"></div>

                {/* Frame 294 */}
                <div className="frame-294-Delete2">
                  {/* Personal Details */}
                  <div className="Personal-details-Delete2">
                    Personal Details
                  </div>

                  {/* Frame 292 */}
                  <div className="frame-292-Delete2">
                    {/* Frame 290 */}
                    <div className="frame-290-Delete2">
                      <div className="name-Delete">Name:</div>
                      <div className="email-Delete">Email:</div>
                      <div className="Number-Delete">Number:</div>
                      <div className="Location-Delete">Location:</div>
                      {/* Frame 291 */}
                      <div className="frame-291-Delete2">
                        <div className="Chris-Mganda-Delete">Chris Mganda</div>
                        {/* Email */}
                        <div className="Email-Delete2">Johndoe@mail.com</div>
                      </div>
                      {/* Number */}
                      <div className="Number-Delete2">+254 712999090</div>
                      {/* Location */}
                      <div className="Location-Delete2">Kangemi, Kenya</div>
                    </div>
                  </div>
                </div>

                {/* Frame 289 */}
                <div className="frame-289-Delete2">
                  {/* Account Details */}
                  <div className="account-details-Delete2">Account Details</div>

                  {/* Frame 288 */}
                  <div className="frame-288-Delete2">
                    {/* Frame 287 */}
                    <div className="frame-287-Delete2">
                      {/* Status */}
                      <div className="status-Delete2">Status:</div>
                      {/* Balance */}
                      <div className="balance-Delete2">Balance:</div>
                      {/* Business */}
                      <div className="business-Delete2">Business:</div>
                      {/* Created */}
                      <div className="created-Delete2">Created:</div>
                    </div>

                    {/* Frame 286 */}
                    <div className="frame-286-Delete2">
                      {/* Active */}
                      <div className="active-Delete2">Active</div>
                      {/* Ksh 00.00 */}
                      <div className="ksh-Delete">Ksh 00.00</div>
                      {/* n/a */}
                      <div className="Squarefour-Delete">n/a</div>
                      {/* 2 Feb 2023 */}
                      <div className="Date-Delete2">30 Jan 2023</div>
                    </div>
                  </div>
                </div>

                {/* Frame 293 */}
                <div className="frame-293-Delete2">
                  {/* Other Actions */}
                  <div className="other-actions-Delete2">Other Actions</div>

                  {/* Frame 212 */}
                  <div className="frame-212-Delete2">
                    {/* Frame 199 */}
                    <div className="frame-199-Delete2">
                      {/* Vector */}
                      <div className="Vector-Delete-1"></div>
                      {/* Edit profile */}
                      <div className="edit-profile-Delete-2">Edit profile</div>
                    </div>
                  </div>

                  {/* Frame 58 */}
                  <div className="Frame-58-Delete-2">
                    {/* Vector */}
                    <div className="Vector-Delete-2"></div>
                    {/* Suspend */}
                    <div className="Suspend-Delete">Suspend</div>
                  </div>

                  {/* Frame 58 */}
                  <div className="Frame-58-Delete-3">
                    {/* Vector */}
                    <div className="Vector-Delete-3"></div>
                    {/* Contact */}
                    <div className="Contact-Delete">Contact</div>
                    {/* Frame 218 */}
                    <div className="frame-218-Delete">
                      <Link to="/home1" className="frame-191-Delete">
                        <p className="cancel-Delete">Cancel</p>
                      </Link>
                      <Link to="/Empty" className="frame-123-Delete">
                        <p className="Delete-Delete">Delete</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
