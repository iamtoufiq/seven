import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import "../CSS/content.css";
function ContinentsPage() {
  return (
    <div>
      <h1 className="ContinentsPage-header">Continents</h1>
      <ul>
        {data.continents.map((continent) => (
          <li key={continent.id}>
            <Link to={`/continents/${continent.id}`}>{continent.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContinentsPage;
