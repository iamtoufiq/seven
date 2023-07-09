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
          <div className="card">
            <Link to={`/countries/${country.id}`}>
              <div className="card_image">
                <img src={country.image} alt={country.name} />
              </div>
              <div className="card_header">
                <h2 className="card_header__title" style={{ display: "none" }}>
                  Smart Watch
                </h2>
                <h2
                  className="card_header__price"
                  style={{ visibility: "hidden" }}
                >
                  36$
                </h2>
              </div>
              <div className="card_description" style={{ display: "none" }}>
                <div className="card_description__content">
                  <p className="card_description__content-text">
                    A watch is a perfect gift for yourself and others. It is not
                    just important for keeping yourself organized and scheduled
                    but is also a big style statement.
                  </p>
                </div>
              </div>
              <div className="card_button">
                <button className="btn card_button__primary">
                  {country.name}
                </button>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CountriesPage;
