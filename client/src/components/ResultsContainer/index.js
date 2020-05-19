import React from "react";

function ResultsContainer(props) {
  return (
    <div className="container clearfix shadow-lg p-3 mb-5 bg-white rounded">
      <h5 className="card-title">Results</h5>
      {props.children}
    </div>
  );
};

export default ResultsContainer;