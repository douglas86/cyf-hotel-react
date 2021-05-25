import React from "react";
import Form from "./Search/Form.jsx"

const Search = () => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Search
