import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import "../CSS/content.css";
function DetailPage() {
  const { destinationId } = useParams();
  const destination = data.continents
    .flatMap((continent) =>
      continent?.countries?.flatMap((country) => country?.destinations)
    )
    .find((destination) => destination?.id === parseInt(destinationId));

  return (
    // <div>
    //   <h1>{destination.name}</h1>
    //   <img src={destination.image} alt={destination.name} />
    //   <p>{destination.description}</p>
    //   <p>Location: {destination.location}</p>
    //   <p>Ratings: {destination.ratings}</p>
    //   <p>Reviews: {destination.reviews}</p>
    //   <p>Opening Hours: {destination.openingHours}</p>
    //   <p>Ticket Price: {destination.ticketPrice}</p>
    //   <a href={destination.website} target="_blank" rel="noopener noreferrer">
    //     Visit Website
    //   </a>
    // </div>
    <div class="card">
      <img src={destination?.image} alt={destination?.name} />
      <div class="card-body">
        <h3 class="card-title">{destination?.name}</h3>
        <p class="card-description">{destination?.description}</p>
        <p class="card-location">{destination?.location}</p>
        <div class="card-details">
          <div class="rating">
            <span class="rating-value">{destination?.ratings}</span>
            <span class="rating-out-of">/ 5</span>
          </div>
          <p class="card-reviews">{destination?.reviews} Reviews</p>
          <p class="card-price">Ticket Price: {destination?.ticketPrice}</p>
        </div>
        <a href={destination.website} target="_blank" rel="noopener noreferrer">
          <button> Visit Website</button>
        </a>
      </div>
    </div>
  );
}

export default DetailPage;
