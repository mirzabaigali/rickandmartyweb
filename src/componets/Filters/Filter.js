import React from "react";
import Species from "./category/Species";
import Status from "./category/Status";
import Gender from "./category/Gender";

const Filter = ({ setStatus, setPageNum, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setPageNum("");
    setGender("");
    setSpecies("");
    window.location.reload(false)
  };
  return (
    <div>
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        className="text-center text-decoration-underline text-primary mb-2"
        style={{ cursor: "pointer" }}
        onClick={clear}
      >
        clear Filters
      </div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Status
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <Status setPageNum={setPageNum} setStatus={setStatus} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Species
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <Species setSpecies={setSpecies} setPageNum={setPageNum} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Gender
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <Gender setGender={setGender} setPageNum={setPageNum} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
