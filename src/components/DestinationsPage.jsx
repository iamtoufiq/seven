import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data";

function DestinationsPage() {
  const { countryId } = useParams();
  const country = data.continents
    .flatMap((continent) => continent.countries)
    .find((country) => country.id === parseInt(countryId));

  return (
    <div>
      <h1>Destinations in {country.name}</h1>
      <ul>
        {country.destinations.map((destination) => (
          <li key={destination.id}>
            <Link to={`/destinations/${destination.id}`}>
              {destination.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationsPage;
