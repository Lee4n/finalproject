import React from "react";
import "../DutyStation/index.css"
import {useHistory, Link} from "react-router-dom"

function DutyStation(props) {

  function handleClick() {
    console.log(props.router)
  }

    return (
      <div className="dutyStation">
        <Link to={{
          pathname: "/station",
          data: props.data // your data array of objects
        }}>
        
          <div className="card-body">
            {props.data.fields.site_name}
          </div>
        </Link>
      </div>
        
    );
  };
  
  export default DutyStation;