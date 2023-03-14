import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./componets/Filters/Filter";
import Pgination from "./componets/Pagination/Pgination";
import Cards from "./componets/Cards/Cards";
import Search from "./componets/Search/Search";
function App() {
  let [loading, setLoading] = useState(false);
  let [pageNum, setPageNum] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchData, setFetchData] = useState([]);
  let { info, results } = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    const getApi = async () => {
      setLoading(true);
      try {
        let data = await fetch(api).then((res) => res.json());
        setFetchData(data);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
      setLoading(false);
    };
    getApi();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center my-4">
        Rick & Morty <span className="text-primary">Wiki</span>
      </h1>
      <div>
        <Search setPageNum={setPageNum} setSearch={setSearch} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters
              setStatus={setStatus}
              setPageNum={setPageNum}
              setGender={setGender}
              setSpecies={setSpecies}
            />
          </div>
          <div className="col-8">
            <div className="row">
              {loading ? (
                <h1 style={{ textAlign: "center" }}>loading...</h1>
              ) : (
                <Cards results={results} />
              )}
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        ""
      ) : (
        <Pgination setPageNum={setPageNum} pageNum={pageNum} info={info} />
      )}
    </div>
  );
}

export default App;
