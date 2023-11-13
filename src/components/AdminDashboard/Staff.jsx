import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Staff.css";

const Staff = () => {
  return (
    <div className="todo">
      <h3 className="staffing-title">Staff type</h3>

      <div className="fetching">
        <div className="got-trow">
          <div className="gone">
            <div className="cellule-status">Status</div>
            <div className="cellule">Dental staff</div>
            <div className="cellule">Laboratory staff</div>
            <div className="cellule">Dental theraphist</div>
            <div className="cellule">Cardiology</div>
            <div className="cellule">Dermatology</div>
            <div className="cellule">Radiology Staff</div>
            <div className="cellule">Action</div>
          </div>
        </div>

        <div className="gone">
          <div className="cellule-ative">Active</div>
          <div className="cellule">Dental</div>
          <div className="cellule">Laboratory</div>
          <div className="cellule">optima</div>
          <div className="cellule">john doe</div>
          <div className="cellule">Dental staff</div>
          <div className="cellule">Dental surgeon</div>
          <div className="actions-icon">
            <BsFillTrashFill className="first-icon" />
            <BsFillPencilFill />
          </div>
        </div>
        <div className="gone">
          <div className="cellule-disabled">Active</div>
          <div className="cellule">Dental</div>
          <div className="cellule">Laboratory</div>
          <div className="cellule">optima</div>
          <div className="cellule">john doe</div>
          <div className="cellule">Dental staff</div>
          <div className="cellule">Dental surgeon</div>
          <div className="actions-icon">
            <BsFillTrashFill className="first-icon" />
            <BsFillPencilFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
