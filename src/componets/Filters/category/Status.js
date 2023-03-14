import React from "react";
import FilterBtn from "../FilterBtn";

const Status = ({ setStatus, setPageNum }) => {
  let Status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="d-flex flex-wrap gap-3">
      {Status.map((item, index) => {
        return (
          <FilterBtn
            key={index}
            name="status"
            index={index}
            item={item}
            setPageNum={setPageNum}
            task={setStatus}
          />
        );
      })}
    </div>
  );
};

export default Status;
