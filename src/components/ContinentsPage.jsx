import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import "../CSS/content.css";
function ContinentsPage() {
  return (
    <div>
      <h1 className="ContinentsPage-header">Continents</h1>
      <ul className="listItems">
        {data.continents.map((continent) => (
          <li key={continent.id} className="custom-list">
            <Link to={`/continents/${continent.id}`}>
              <button>{continent.name}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContinentsPage;
