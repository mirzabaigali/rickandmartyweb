import React from "react";
import FilterBtn from "../FilterBtn";

const Species = ({ setPageNum, setSpecies }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="d-flex flex-wrap gap-3">
      {species.map((item, index) => {
        return (
          <FilterBtn
            key={index}
            name="species"
            index={index}
            item={item}
            setPageNum={setPageNum}
            task={setSpecies}
          />
        );
      })}
    </div>
  );
};

export default Species;
