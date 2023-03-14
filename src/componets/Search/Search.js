import React from "react";
import "./Search.css";

const Search = ({setPageNum,setSearch }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={e=>{
          setPageNum(1)
          setSearch(e.target.value)}}
        type="text"
        name="search"
        id="search"
        placeholder="search for character"
        className="searchBar"
      />
      <button
        className="btn btn-primary fs-5"
        onClick={(e) => e.preventDefault()}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
