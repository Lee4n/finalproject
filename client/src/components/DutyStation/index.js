import React from "react";
import {Link} from "react-router-dom"
import './index.css'

function DutyStation(props) {
  const handleStation = (site_name) => {
    // console.log(site_name)
    props.setState({
      site: site_name
    })
  }
  return (

    <div className="container-fluid mb-2">
      <ul className="list-group">
        <Link
          to="/station"
          style={{
          textDecoration: 'none'
        }}
          onClick=
          {() => handleStation(props.data.fields.site_name)}>
          <li className="list-group-item bg-secondary text-white">
            <span className="nounderline siteLink">{props.data.fields.site_name}</span>
          </li>
        </Link>
      </ul>
    </div>

  );
};

export default DutyStation;