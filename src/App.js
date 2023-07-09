import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContinentsPage from "./components/ContinentsPage";
import CountriesPage from "./components/CountriesPage";
import DestinationsPage from "./components/DestinationsPage";
import DetailPage from "./components/DetailPage";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ContinentsPage />} />
        <Route
          exact
          path="/continents/:continentId"
          element={<CountriesPage />}
        />
        <Route
          exact
          path="/countries/:countryId"
          element={<DestinationsPage />}
        />
        <Route
          exact
          path="/destinations/:destinationId"
          element={<DetailPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
