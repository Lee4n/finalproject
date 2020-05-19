import React from "react";
import "../DutyStation/index.css"

function DutyStation(props) {
    return (
        <div className="dutyStation">
        <div className="card-body">
          {props.data.fields.site_name}
        </div>
      </div>
    );
  };
  
  export default DutyStation;