import React, {Component} from "react";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";
import "../pages/search.css"
import DutyStation from "../components/DutyStation";


class Search extends Component {
state = {
  apiResults: [],
  search: "",
  currentUser: ""
}
  
  componentDidMount() {
    API.getCurrentUser().then((results) => {
     
        console.log(results.data, "user")
        this.setState({
          currentUser:  results.data.username
        })
      
   
    })
  }

  handleLogOut = () => {
    API.userLogOut().then((results) => {
      window.location.href = "/"
    })
  }

 handleChange = event => {
         const {name, value} = event.target;
         this.setState({
           [name]:value
         })
 }

 handleSubmit = event => {
     
     API.getDutyStationName(this.state.search).then(results => {
        this.setState({
          apiResults: results.data.records
         });
     });
 };

  render() { 
    
    let dutyStations = []
    this.state.apiResults.map((index) => {
     
      dutyStations.push(
        
        <DutyStation data={index} setState={this.props.setState}/>
      )
    })
    return (
      <div>
        <Nav isLoggedIn={this.props.isLoggedIn} username={this.state.currentUser}  handleLogOut={this.handleLogOut}/>
        <br/>
        <SearchBar  handleChange={this.handleChange} search={this.state.search} handleSubmit={this.handleSubmit}/>
        <div className="stationContainer">
          {dutyStations}
        </div>
      </div>
    );
  };

};

export default Search;