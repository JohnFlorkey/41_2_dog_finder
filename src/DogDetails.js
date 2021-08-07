import React from "react";
import { Redirect, useParams } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name === name);
  if (!dog) {
    return <Redirect to="/dogs" />;
  }
  return (
    <div key={dog.name} className="DogDetails">
      <img src={dog.src} alt={dog.name} />
      <h3>
        {dog.name} Age: {dog.age}
      </h3>
      {dog.facts.map((f, idx) => (
        <div key={idx}>{f}</div>
      ))}
    </div>
  );
}

export default DogDetails;
