

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
      faAngleRight, // Import the greater than icon
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
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="icon-right"
                    />
                  </NavLink>
                </li>

                <li>
                  <NavLink to="">
                    <FontAwesomeIcon icon={faHospital} />
                    <span>Standards</span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="icon-right"
                    />
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/Staff">
                    <FontAwesomeIcon icon={faUserTie} />
                    <span>Staff type</span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="icon-right"
                    />
                  </NavLink>
                </li>

                <li>
                  <NavLink to="">
                    <FontAwesomeIcon icon={faBuilding} />
                    <span>Institution</span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="icon-right"
                    />
                  </NavLink>
                </li>

                {/* Dropdown for Region */}
                <li className="dropdown-submenu">
                  <NavLink to="/dashboard/region">
                    <FontAwesomeIcon icon={faGlobe} />
                    <span className="">Region</span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="icon-right"
                    />
                  </NavLink>
                  <ul className="submenu">
                    <li>
                      <NavLink to="/dashboard/continent">Continent</NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/country">Country</NavLink>
                    </li>
                    {/* Add more submenu items as needed */}
                  </ul>
                </li>
                {/* End of Dropdown for Region */}

                <li>
                  <NavLink to="/dashboard/users">
                    <FontAwesomeIcon icon={faUsers} />
                    <span>Users</span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="icon-right"
                    />
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/reports">
                    <FontAwesomeIcon icon={faFile} />
                    <span>Report</span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="icon-right"
                    />
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/Setting">
                    <FontAwesomeIcon icon={faCog} />
                    <span>Settings</span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="icon-right"
                    />
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/logout">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className="logout">Logout</span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="icon-right"
                    />
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

