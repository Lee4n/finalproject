import React from "react";

function BookSearch( props) {
  return (
    <div className="container clearfix shadow-lg p-3 mb-5 bg-white rounded">
      <h5>Book Search</h5>
      <div className="input-group mb-3">
        <input type="text" onChange={props.handleChange}  className="form-control" name="search" value={props.search} placeholder="Search for a book..."/>

      </div>
      <button type="button" onClick={props.handleSubmit} class="btn btn-outline-primary float-right">Search</button>
    </div>
  );
};

export default BookSearch;