import React from 'react'

import './Users.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faTrash,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";


const Users = () => {
  return (
    <div className="users-tab">
      <div className="user-description">
        <span className="management-users">Admin management users</span>

        <div className="user-profile">
          <img
            src={require("../../assets/images/Ellipse 1.png")}
            alt=""
            draggable="false"
          />
        </div>
      </div>

      <div className="user-optima-desc">
        <div className="first-line-user">
          <span className="user-tile">user</span>
        </div>

        <div className="search-user">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search" />
        </div>

        <div className="user-add">
          <button className="adding">
            New user
            <FontAwesomeIcon className='plus' icon={faPlus} />
          </button>
        </div>
      </div>

      <div className="user-list">
        <ul className="cell">
          <li className="active">
            <span className="status">Active status</span>
            <span className="username">Username</span>
            <span className="email">email</span>
            <span className="action">Action</span>
          </li>
        </ul>
      </div>

      <div className="user-row">
        <div className="user-cell">
          Active
        </div>
        <div className="user-name">jonathan</div>
        <div className="user-email">derriv@gmail.com</div>
        <FontAwesomeIcon className="red-icon" icon={faTrash} />
        <FontAwesomeIcon icon={faPencilAlt} />
       </div>
       <br></br>

      <div className="user-row">
        <div className="user-cell" >
          Active
        </div>
        <div className="user-name">jonathan</div>
        <div className="user-email">derriv@gmail.com</div>
        <FontAwesomeIcon className="red-icon" icon={faTrash} />
        <FontAwesomeIcon icon={faPencilAlt} />
      </div>
      
       <br></br>

        <div className="user-row">
        <div className="user-cell">
          Active
        </div>
        <div className="user-name">jonathan</div>
        <div className="user-email">derriv@gmail.com</div>
        <FontAwesomeIcon className="red-icon" icon={faTrash} />
        <FontAwesomeIcon icon={faPencilAlt} />
      </div>
    </div>
  );
}

export default Users