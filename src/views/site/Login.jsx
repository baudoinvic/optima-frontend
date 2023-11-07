import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    
    <div className="login-container">
      <div className="optima-user-auth">
        <div className="local-user">Sign Up</div>
        <div className="local-user-log">Login</div>
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>

      <div className="teeny">
        <input type="checkbox" />
        <span className="remember">remember me</span>

        <span className="forgot-password">Forgot password?</span>
      </div>

      <button className="btn-signup" type="submit">
        Login
      </button>

      <span className="login-title">have no account?</span>
       <NavLink to = "/signup">
       <span className="title-login-here">Signup</span>
      </NavLink>
    </div>
  );
}

export default Login