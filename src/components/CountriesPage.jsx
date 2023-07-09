import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data";

function CountriesPage() {
  const { continentId } = useParams();
  const continent = data.continents.find(
    (continent) => continent.id === parseInt(continentId)
  );

  return (
    <div>
      <h1>Countries in {continent.name}</h1>
      <ul>
        {continent.countries.map((country) => (
          <li key={country.id}>
            <Link to={`/countries/${country.id}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesPage;
