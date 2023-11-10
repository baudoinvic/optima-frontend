import React from 'react'
import {
  faBolt,
  faHospital,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from "./Chart";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Dash = () => {
  return (
    <div>
      <div className="notification">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="not">
          <img className='third-logo-admin'
            src={require("../../assets/images/admin.png")}
            alt=""
            draggable="false"
          />
          <span className=''>Admin</span>
          {/* <NotificationsNoneIcon /> */}
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
  );
}

export default Dash