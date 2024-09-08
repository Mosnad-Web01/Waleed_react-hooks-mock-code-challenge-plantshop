import React from "react";
import PlantList from "./PlantList";

function PlantPage({ plants }) {
  return (
    <div className="plant-page">
      <h1>Plant Collection</h1>
      <PlantList plants={plants} />
    </div>
  );
}

export default PlantPage;
