import React from 'react'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './Regional.css'

const Regionalcommunity = () => {
  return (
    <div className="regional-communities">
      <div className="number-of-community">
        <h3 className="regional-community-tile">regional community</h3>
        <div className="communities-tab">
          <div className="single-community">
            <div className="communities">name</div>
            <div className="communities">Location</div>
            <div className="communities">Description</div>
            <div className="communities">number of countries</div>
            <div className="communities">Action</div>
          </div>
        </div>

        <div className="single-community">
          <div className="communities">UMA</div>
          <div className="communities"> North Africa</div>
          <div className="communities">Common Market for Eastern Africa</div>
          <div className="communities">19</div>
          <div className="communities">
            <BsFillTrashFill className="community-icon" />
            <BsFillPencilFill />
          </div>
        </div>

        <div className="single-community">
          <div className="communities">EAC</div>
          <div className="communities">Easten Africa</div>
          <div className="communities">East Africa community</div>
          <div className="communities">7</div>
          <div className="communities">
            <BsFillTrashFill className="community-icon" />
            <BsFillPencilFill />
          </div>
        </div>

        <div className="single-community">
          <div className="communities">SADC</div>
          <div className="communities">Southern Africa</div>
          <div className="communities">
            Southern African Development Community{" "}
          </div>
          <div className="communities">16</div>
          <div className="communities">
            <BsFillTrashFill className="community-icon" />
            <BsFillPencilFill />
          </div>
        </div>

        <div className="single-community">
          <div className="communities">ECCAS</div>
          <div className="communities"> Central Africa</div>
          <div className="communities">
            Economic Community of Central African
          </div>
          <div className="communities">10</div>
          <div className="communities">
            <BsFillTrashFill className="community-icon" />
            <BsFillPencilFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regionalcommunity