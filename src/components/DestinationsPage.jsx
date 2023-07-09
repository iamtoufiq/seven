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
      <div>
        <h1 className="ContinentsPage-header">
          Destinations in {country.name}
        </h1>
        <ul className="listItems">
          {country.destinations.map((destination) => (
            <div className="card">
              <Link to={`/destinations/${destination.id}`}>
                <div className="card_image">
                  <img src={destination.image} alt={destination.name} />
                </div>
                <div className="card_header">
                  <h2
                    className="card_header__title"
                    style={{ display: "none" }}
                  >
                    {destination.name}
                  </h2>
                  <h2
                    className="card_header__price"
                    style={{ display: "none" }}
                  >
                    location : {destination.location}
                  </h2>
                </div>
                <div className="card_description">
                  <div className="card_description__content">
                    <p
                      className="card_description__content-text"
                      style={{ textDecoration: "none" }}
                    >
                      {destination.description}
                    </p>
                  </div>
                </div>
                <div className="card_button">
                  <button className="btn card_button__primary">
                    {destination.name}
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DestinationsPage;
