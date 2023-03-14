import React from "react";
import FilterBtn from "../FilterBtn";

const Gender = ({ setGender, setPageNum }) => {
  let Gender = ["male", "female", "genderless", "unknown"];
  return (
    <div className="d-flex flex-wrap gap-3">
      {Gender.map((item, index) => {
        return (
          <FilterBtn
            key={index}
            name="gender"
            index={index}
            item={item}
            setPageNum={setPageNum}
            task={setGender}
          />
        );
      })}
    </div>
  );
};

export default Gender;
