import React from "react";

function Nav(props) {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Rate My Duty Station
      </a>
      {
        props.username ? <div>Logged in as {props.username } <a href="#"  onClick={props.handleLogOut}>Log Out</a></div>
     : <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/login">Login / Sign Up</a>
        </li>
      </ul>
        
      }
    </nav>
  );
};

export default Nav;