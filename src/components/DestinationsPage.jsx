import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data";
import "../CSS/content.css";
function DestinationsPage() {
  const { countryId } = useParams();
  const country = data.continents
    .flatMap((continent) => continent.countries)
    .find((country) => country.id === parseInt(countryId));

  return (
    <div>
      <h1 className="ContinentsPage-header">Destinations in {country.name}</h1>
      <ul className="listItems">
        {country.destinations.map((destination) => (
          <li key={destination.id} style={{ listStyle: "none" }}>
            <Link to={`/destinations/${destination.id}`}>
              <button>{destination.name}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationsPage;
