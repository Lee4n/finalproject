import React, { Component } from "react";
import Nav from "./components/Nav/index"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Search from "./pages/search"
import Saved from "./pages/saved"
// object={
//   name:"lee",
//   phone:"911"
// }

// object.name
// object.phone

// ---destruct--
// const {name,phone}=object
// name
// phone
class App extends Component {
  render() {
    return (
      <Router>
          <Route  exact path={["/", "/search"]}>
            <Search />
          </Route>

          <Route exact path="/saved">
            <Saved />
          </Route>

      </Router>
    );
  }
}

export default App;
