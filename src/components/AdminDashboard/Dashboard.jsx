import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import Chart from "./Chart";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import {
  faTachometerAlt,
  faHome,
  faUsers,
  faFile,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  faBolt,
  faHospital, 
  faDollarSign, 
} from "@fortawesome/free-solid-svg-icons";




const Dashboard = () => {
    
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-left-side">
          <ul className="sidebar-menu">
            <li>
              <NavLink to="/dashboard">
                <FontAwesomeIcon icon={faTachometerAlt} />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/">
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/users">
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
              <NavLink to="/profile">
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/settings">
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
        <div className="notification">
          <h2 className="dashboard-title">Dashboard</h2>
          <div className="not">
            <NotificationsNoneIcon />
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <span className="workload">
              <FontAwesomeIcon icon={faBolt} /> Workload
            </span>
            <h2>34.416</h2>
            <p>time of working per day</p>
          </div>

          <div className="card">
            <span className="facility">
              <FontAwesomeIcon icon={faHospital} /> Facility
            </span>
            <h2>10.4p</h2>
            <p>number of treating patients</p>
          </div>

          <div className="card">
            <span className="facility">
              <FontAwesomeIcon icon={faDollarSign} />
              Salary
            </span>
            <h2>$20.4k</h2>
            <p>calculating the Salary per year</p>
          </div>
        </div>
        <div className="chart">
         <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
