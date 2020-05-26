import React from "react";

function BookSearch( props) {
  return (
    <div className="container clearfix shadow-lg p-3 mb-5 bg-white rounded">
      <div className="input-group mb-3">
        <input type="text" autoComplete="off" onChange={props.handleChange}  className="form-control" name="search" value={props.search} placeholder="Search for a Duty Station..."/>

      </div>
      <button type="button" onClick={props.handleSubmit} class="btn btn-outline-primary float-right">Search</button>
    </div>
  );
};

export default BookSearch;