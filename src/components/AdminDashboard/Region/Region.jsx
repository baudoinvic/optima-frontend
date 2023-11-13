import React from "react";
import "./Region.css";
import { NavLink } from "react-router-dom";

const Region = () => {
  const continents = [
    {
      name: "Africa",
      regionalCommunities: [
        {
          name: "East Africa",
          numberOfCountries: 8,
        },
        {
          name: "West Africa",
          numberOfCountries: 8,
        },
      ],
    },
    {
      name: "Asia",
      regionalCommunities: [
        {
          name: "Southeast Asia",
          numberOfCountries: 11,
        },
        {
          name: "Central Asia",
          numberOfCountries: 5,
        },
      ],
    },
    {
      name: "Europe",
      regionalCommunities: [
        {
          name: "European Union",
          numberOfCountries: 27,
        },
        {
          name: "Nordic Council",
          numberOfCountries: 5,
        },
      ],
    },
    {
      name: "America",
      regionalCommunities: [
        {
          name: "North American Free Trade Agreement (NAFTA)",
          numberOfCountries: 3,
        },
        {
          name: "Caribbean Community (CARICOM)",
          numberOfCountries: 20,
        },
        {
          name: "Mercado Común del Sur (MERCOSUR)",
          numberOfCountries: 6,
        },
        {
          name: "Andean Community",
          numberOfCountries: 4,
        },
      ],
    },
    {
      name: "Oceania",
      regionalCommunities: [
        {
          name: "Pacific Islands Forum",
          numberOfCountries: 14,
        },
      ],
    },
  ];

  return (
    <div className="regional">
      <h3 className="continent-title">Continents</h3>

      <div className="continent-id">
        <div className="community">
          <div className="regional-community">
            <div className="cellule-continent">Continents</div>
            <div className="cellule-continent">
              Number of Regional Communities
            </div>
            <div className="cellule-continent">Total Number of Countries</div>
          </div>
        </div>

        {continents.map((continent) => (
          <div className="regional-community" key={continent.name}>
            <div className="cellule-continent">{continent.name}</div>

            <NavLink to="/dashboard/regionalcommunity">
              <div className="cellule-continent">
                {continent.regionalCommunities.length}
              </div>
            </NavLink>

            <div className="cellule-continent">
              {continent.regionalCommunities.reduce(
                (totalCountries, community) =>
                  totalCountries + community.numberOfCountries,
                0
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Region;
