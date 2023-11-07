import React from 'react'
import './Signup.css'
import { NavLink } from 'react-router-dom';

const Signup = () => {
  
  return (
    <div className="signup-container">
      <div className="optima-user">
        <div className="signup-title">Sign Up</div>
        <div className="user-credential">Login</div>
      </div>
      <div className="form-group">
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id="fullname" name="fullname" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" />
      </div>

      <div class="form-group">
        <label for="facility">Facility</label>
        <div class="input-container">
          <input type="email" id="facility" name="facility" />
          <span class="dropdown-icon">&#9662;</span>
        </div>
      </div>

      <div class="form-group">
        <label for="staff-type">Staff Type</label>
        <div class="input-container">
          <input type="email" id="staff-type" name="staff-type" />
          <span class="dropdown-icon">&#9662;</span>
        </div>
      </div>

      <div class="form-group">
        <label for="staff-department">Staff Department</label>
        <div class="input-container">
          <input type="email" id="staff-department" name="staff-department" />
          <span class="dropdown-icon">&#9662;</span>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" />
      </div>
      <button className="btn-signup" type="submit">
        Sign Up
      </button>

      <span className="login-title">already have an account?</span>

      <NavLink to="/login">
        <span className="title-login-here">Login</span>
      </NavLink>
    </div>
  );
}

export default Signup