import React, {Component} from "react";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";
import "../pages/search.css"
import DutyStation from "../components/DutyStation";


class Search extends Component {

constructor(props) {
  super(props)
  this.state = {
    apiResults: [],
    search: ""
  }
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
    //  this.props.history.push('/results')
 };

  render() { 
    
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
        <SearchBar  handleChange={this.handleChange} search={this.state.search} handleSubmit={this.handleSubmit}/>
        <div className="stationContainer">
          {dutyStations}
        </div>
      </div>
    );
  };

};

export default Search;