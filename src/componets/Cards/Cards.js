import React from "react";
import "../Cards/Cards.css";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div key={id} className="col-4 mb-4 position-relative">
          <div className="cards">
            <img src={image} alt="" className="img-fluid img" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">Last location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className="badge bg-danger cards-badge">{status}</div>
              );
            } else if (status === "Alive") {
              return (
                <div className="badge bg-success cards-badge">{status}</div>
              );
            } else {
              return (
                <div className="badge bg-secondary cards-badge">{status}</div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "no data found :/";
  }
  return <>{display}</>;
};

export default Cards;
