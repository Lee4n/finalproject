import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Search from "./pages/search"
import stationRating from "./pages/stationRating";
import RatingResults from "./components/RatingResults";
import SignUp from "./components/SignUp";
import Login from "./components/userLogin";

class App extends Component {
  render() {
    return (
      <Router>
        
          <Route exact path={["/", "/search"]}>
            <Search/>
          </Route>

          <Route path="/register" component={SignUp}/>
          <Route path="/login" component={Login}/>

          <Route path="/editRatings" component={stationRating}/>
          <Route path="/station" component={RatingResults}/>
          
      </Router>
    );
  }
}

export default App;
