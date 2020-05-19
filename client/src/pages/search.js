import React, {Component} from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookSearch from "../components/BookSearch";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";
import ResultsList from "../components/ResultsList";
import "../pages/search.css"
import DutyStation from "../components/DutyStation";
import {Link} from "react-router-dom";

class Search extends Component {

constructor(props) {
  super(props)
  this.state = {
    apiResults: [],
    search: ""
  }
}

componentDidMount() {
  API.getAllDutyStations(this.state.search).then(results => {
         console.log(results.data.records)
    this.setState({
       apiResults: results.data.records
    });
});
}
 
 handleChange = event => {
         const {name, value} = event.target;
         this.setState({
           [name]:value
         })
 }

 handleSubmit = event => {
     console.log("SEARCH", this.state.search)
     API.getDutyStationName(this.state.search).then(results => {
         
         this.setState({
            apiResults: results.data.records
         });
     });
 };

  render() { 
    console.log(this.props, "SEARCH.js")
    let dutyStations = []
    this.state.apiResults.map((index) => {
      
      dutyStations.push(
        
        <DutyStation data={index}/>
      )
    })
    return (
      <div>
        <Nav/>
        <br/>
        <Header/>
        <br/>
        <BookSearch  handleChange={this.handleChange} search={this.state.search} handleSubmit={this.handleSubmit}/>
        <div className="stationContainer">
          {dutyStations}
        </div>
      </div>
    );
  };

};

export default Search;