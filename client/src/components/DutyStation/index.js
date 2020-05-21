import React from "react";
import "../DutyStation/index.css"
import {Link} from "react-router-dom"

function DutyStation(props) {

    return (
      <div className="dutyStation">
        <Link to={{pathname: "/station", state: {data: props.data}}}>
          <div className="card-body">
            {props.data.fields.site_name}
          </div>
        </Link>
      </div>
    );
  };
  
  export default DutyStation;