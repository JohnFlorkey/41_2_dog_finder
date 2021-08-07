import React from "react";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      {dogs.map((d) => (
        <div key={d.name} className="DogList-item">
          <div className="DogList-img">
            <a href={`/dogs/${d.name}`}>
              <img src={d.src} alt={d.name} />
            </a>{" "}
          </div>
          <div className="DogList-name">
            <a href={`/dogs/${d.name}`}>{d.name}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DogList;
