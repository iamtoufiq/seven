import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data";
import "../CSS/content.css";
function CountriesPage() {
  const { continentId } = useParams();
  const continent = data.continents.find(
    (continent) => continent.id === parseInt(continentId)
  );

  return (
    <div>
      <h1 className="ContinentsPage-header">Countries in {continent.name}</h1>
      <ul className="listItems">
        {continent.countries.map((country) => (
          <li key={country.id} style={{ listStyle: "none" }}>
            <Link to={`/countries/${country.id}`}>
              <button>{country.name}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesPage;
