import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navbar from '../../scss/modules/components/site/navbar.module.scss';
const Navbar = () => {
    const [bar, setBar] = useState(false);
    const togglebar = () => {
        setBar(!bar);
    }
    return (
      <div className={navbar.navbar}>
        <div
          className={`${navbar.humber} ${bar ? navbar.active : ""}`}
          onClick={togglebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a to="/" className={navbar.flex}>
          <div className={navbar.logo}>
            <img
              src={require("../../assets/logo.webp")}
              alt=""
              draggable="false"
            />
          </div>
        </a>
        <div className={`${navbar.links} ${bar ? navbar.humber : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </div>
        <div className={navbar.auth}>
          <div className={`${navbar.signin} ${navbar.flex}`} v-if="!user">
            <a to="/signin" className={navbar.flex}>
              <div className={navbar.icon}>
                <img
                  src={require("../../assets/icons/log.svg").default}
                  alt=""
                  draggable="false"
                />
              </div>
              <NavLink to="/signup">
                <label>Sign in</label>
              </NavLink>
            </a>
          </div>
        </div>
      </div>
    );
}
export default Navbar;