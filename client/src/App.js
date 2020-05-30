import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Search from "./pages/search"
import StationRating from "./pages/stationRating";
import RatingResults from "./components/RatingResults";
import SignUp from "./components/SignUp";
import Login from "./components/userLogin";
import API from "./utils/API";
import Nav from "./components/Nav"

class App extends Component {
  state = {
    login: false,
    currentUser: "",
    site: ""
  }
  componentDidMount() {
    API.getCurrentUser().then((results) => {
      this.setState({
        currentUser: results.data.username
      })
    })
  }
  loginTrue() {
    this.setState({
      login: true
    })
  }

  addSiteName(newSiteName) {

    this.setState(newSiteName)
  }


  render() {
    return (
      <Router>
        
          <Route exact path={["/", "/search"]}>
            <Search login={this.state.login} setState={this.addSiteName.bind(this)}/>
          </Route>

          <Route path="/register" component={SignUp}/>
          <Route path="/login" component={() => <Login loginTrue={this.loginTrue.bind(this)}/>}/>

          <Route exact path="/editRatings">
            <StationRating isLoggedIn={this.state.login} username={this.state.currentUser}/>
          </Route>
         
          <Route exact path="/station" component={() => <RatingResults siteName={this.state.site} isLoggedIn={this.state.login}/>}/>
          
      </Router>
    );
  }
}

export default App;
