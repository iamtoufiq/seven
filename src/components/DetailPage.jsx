import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

function DetailPage() {
  const { destinationId } = useParams();
  const destination = data.continents
    .flatMap((continent) =>
      continent.countries.flatMap((country) => country.destinations)
    )
    .find((destination) => destination.id === parseInt(destinationId));

  return (
    <div>
      <h1>{destination.name}</h1>
      <img src={destination.image} alt={destination.name} />
      <p>{destination.description}</p>
      <p>Location: {destination.location}</p>
      <p>Ratings: {destination.ratings}</p>
      <p>Reviews: {destination.reviews}</p>
      <p>Opening Hours: {destination.openingHours}</p>
      <p>Ticket Price: {destination.ticketPrice}</p>
      <a href={destination.website} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
}

export default DetailPage;
