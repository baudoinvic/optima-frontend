import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 

import {
  faTachometerAlt,
  faUsers,
  faFile,
  faUserTie,
  faUser,
  faBuilding,
  faHospital,
  faGlobe,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-left-side">
          <div className="optima-dashboard-logo">
            <img
              className="optima-admin-logo"
              src={require("../../assets/images/group.png")}
              alt=""
              draggable="false"
            />
            <span className="optima-title-logo">optima</span>
          </div>

          <ul className="sidebar-menu">
            <li>
              <NavLink to="/dashboard">
                <FontAwesomeIcon icon={faTachometerAlt} />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="">
                <FontAwesomeIcon icon={faHospital} />
                <span>Standards</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/Staff">
                <FontAwesomeIcon icon={faUserTie} />
                <span>Staff type</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="">
                <FontAwesomeIcon icon={faBuilding} />
                <span>Institution</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/region">
                <FontAwesomeIcon icon={faGlobe} />
                <span className="">Region</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/users">
                <FontAwesomeIcon icon={faUsers} />
                <span>Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/reports">
                <FontAwesomeIcon icon={faFile} />
                <span>Report</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/Setting">
                <FontAwesomeIcon icon={faCog} />
                <span>Settings</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/logout">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span className="logout">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar-right-side">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
