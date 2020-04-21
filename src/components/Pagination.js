import React from 'react';

const Pagination = (props) => {
  return (
    <div className="py-3">
      <button
        type="button"
        className="btn btn-info mr-1"
        onClick={props.prevPage}
      >
        Previous &larr;
      </button>
      <button type="button" className="btn btn-info" onClick={props.nextPage}>
        Next &rarr;
      </button>
    </div>
  );
};

export default Pagination;
