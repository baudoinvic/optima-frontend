import React from 'react'
import { useState } from 'react';
import './Region.css'

const Region = () => {
  const data = [
    {
      continent: "Africa",
      country: "Rwanda",
      city: "Kigali",
      province: "Kigali",
      district: "Gasabo",
      cellule: "Kimirhura",
      sector: "Rugando",
    },
    {
      continent: "Europe",
      country: "Rwanda",
      city: "Kigali",
      province: "Kigali",
      district: "Gasabo",
      cellule: "Kimirhura",
      sector: "Rugando",
    },
    {
      continent: "America",
      country: "Rwanda",
      city: "Kigali",
      province: "Kigali",
      district: "Gasabo",
      cellule: "Kimirhura",
      sector: "Rugando",
    },
    {
      continent: "Asia",
      country: "Rwanda",
      city: "Kigali",
      province: "Kigali",
      district: "Gasabo",
      cellule: "Kimirhura",
      sector: "Rugando",
    },
    {
      continent: "Oceania",
      country: "Rwanda",
      city: "Kigali",
      province: "Kigali",
      district: "Gasabo",
      cellule: "Kimirhura",
      sector: "Rugando",
    },
  ];


     const itemsPerPage = 1;

     const [currentPage, setCurrentPage] = useState(1);

     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;

     const displayedData = data.slice(startIndex, endIndex);

     const totalPages = Math.ceil(data.length / itemsPerPage);

     const handlePreviousPage = () => {
       setCurrentPage((prev) => Math.max(prev - 1, 1));
     };

     const handleNextPage = () => {
       setCurrentPage((prev) => Math.min(prev + 1, totalPages));
     };



  return (
    <div className="todo">
      <h3 className="staffing-title">Geographics region</h3>

      <div className="fetching">
        <div className="got-trow">
          <div className="gone">
            <div className="cellule-continent">Continent</div>
            <div className="cellule">Country</div>
            <div className="cellule">City</div>
            <div className="cellule">Province</div>
            <div className="cellule">District</div>
            <div className="cellule">Cellule</div>
            <div className="cellule">Sector</div>
            <div className="cellule">View</div>
          </div>
        </div>

        <div className="gone">
          <div className="cellule-Africa">Africa</div>
          <div className="cellule">Rwanda</div>
          <div className="cellule">kigali city</div>
          <div className="cellule">kigali</div>
          <div className="cellule">gasabo</div>
          <div className="cellule">kimirhura</div>
          <div className="cellule">Rugando</div>
          <div className="actions-region-view">
            <button className="view">View </button>
          </div>
        </div>
        <div className="gone">
          <div className="cellule-africa">Europe</div>
          <div className="cellule">Rwanda</div>
          <div className="cellule">kigali city</div>
          <div className="cellule">kigali</div>
          <div className="cellule">gasabo</div>
          <div className="cellule">kimirhura</div>
          <div className="cellule">Rugando</div>
          <div className="actions-icon">
            <button className="view">View </button>
          </div>
        </div>
        <div className="gone">
          <div className="cellule-Africa">America</div>
          <div className="cellule">Rwanda</div>
          <div className="cellule">kigali city</div>
          <div className="cellule">kigali</div>
          <div className="cellule">gasabo</div>
          <div className="cellule">kimirhura</div>
          <div className="cellule">Rugando</div>
          <div className="actions-region-view">
            <button className="view">View </button>
          </div>
        </div>
        <div className="gone">
          <div className="cellule-Africa">Asia</div>
          <div className="cellule">Rwanda</div>
          <div className="cellule">kigali city</div>
          <div className="cellule">kigali</div>
          <div className="cellule">gasabo</div>
          <div className="cellule">kimirhura</div>
          <div className="cellule">Rugando</div>
          <div className="actions-region-view">
            <button className="view">View </button>
          </div>
        </div>
        <div className="gone">
          <div className="cellule-Africa">Oceania</div>
          <div className="cellule">Rwanda</div>
          <div className="cellule">kigali city</div>
          <div className="cellule">kigali</div>
          <div className="cellule">gasabo</div>
          <div className="cellule">kimirhura</div>
          <div className="cellule">Rugando</div>
          <div className="actions-region-view">
            <button className="view">View </button>
          </div>
        </div>
      </div>

      <div className="pagination">
          <button className='pagination-previous' onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button 
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button className='pagination-next' onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
    </div>
    </div>
  );
}

export default Region