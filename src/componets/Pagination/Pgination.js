import React from "react";
import ReactPaginate from "react-paginate";

const Pgination = ({ info, pageNum, setPageNum }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(data) => {
        setPageNum(data.selected + 1);
      }}
      forcePage={pageNum === 1 ? 0 : pageNum - 1}
      activeClassName="active"
      pageCount={info?.pages}
    />
  );
};

export default Pgination;
