import React from "react";

function PlantCard({ plant }) {
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      {plant.soldOut ? (
        <button>Out of Stock</button>
      ) : (
        <button className="primary">In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
