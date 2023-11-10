
  import React from "react";
  import "./Setting.css";
  import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
  import {
    faMessage,
  
  
    faLock,
  } from "@fortawesome/free-regular-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  import {
    faUser,
    faShieldAlt,
    faKey,
  } from "@fortawesome/free-solid-svg-icons";



  const Setting = () => {
    return (
      <div className="setting-user">
        <div className="settings-tab">
          <div className="user-setting-logo">
            <img
              src={require("../../assets/images/group.png")}
              alt=""
              draggable="false"
            />

            <div className="setting-second-img">
              <FontAwesomeIcon className="sms" icon={faMessage} />{" "}
              <NotificationsNoneIcon className="notif" />
              <img
                src={require("../../assets/images/Ellipse 1.png")}
                alt=""
                draggable="false"
              />
            </div>
          </div>
        </div>

        <div className="information-part">
          <div className="setting-left-side">
            <div className="change-information">
              <span className="update-profile">
                <FontAwesomeIcon icon={faUser} />
                update profile
              </span>
              <span className="security">
                <FontAwesomeIcon icon={faShieldAlt} />
                security
              </span>
              <span className="password-change">
                <FontAwesomeIcon icon={faKey} />
                change password
              </span>
            </div>
          </div>
          <div className="setting-right-side">
            <h4 className="profile-setting-tile">profile</h4>
            <span className="setting-info-title">
              This information will be displayed publicly be careful what you
              share
            </span>
            <form className="settings-tab-form">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="enter your email"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <select id="gender" name="gender">
                    <option value="gender">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="your phone number"
                  />
                </div>
              </div>

              <span className="personal-address">personal address</span>

              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    id="country"
                    name="name"
                    placeholder="your country"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="province"
                    name="name"
                    placeholder="province"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="col">
                    <input
                      type="text"
                      id="District"
                      name="name"
                      placeholder="District"
                    />
                  </div>
                </div>
                <div className="col">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="your phone number"
                  />
                </div>
              </div>
            </form>

            <div className="cancel">
             <button className="canceling">
               Cancel
             </button>
             <div className="save">
              <button className="saving">
                Save
              </button>
             </div>
            </div>


          </div>
        </div>
      </div>
    );
  };

  export default Setting;
