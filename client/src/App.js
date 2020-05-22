import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Search from "./pages/search"
import StationView from "./pages/stationView"

// object={   name:"lee",   phone:"911" } object.name object.phone ---destruct--
// const {name,phone}=object name phone
class App extends Component {
  render() {
    return (
      <Router>
        
          <Route exact path={["/", "/search"]}>
            <Search/>
          </Route>

          <Route path="/station" component={StationView}/>

      </Router>
    );
  }
}

export default App;
