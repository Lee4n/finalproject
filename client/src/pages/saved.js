import React, {Component} from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import SavedContainer from "../components/SavedContainer";
import SavedList from "../components/SavedList";
import API from "../utils/API";

class Saved extends Component {
  state = {
    apiResults: [],
  };

  handleDelete = id => {
    API
      .deleteBook(id)
      .then(results => {
        this.getSavedBooks();
      });
  };

componentDidMount() {
  this.getSavedBooks();
};

 getSavedBooks() {
  API.displaySavedBooks().then(results => {
      console.log(results.data)
    this.setState({
       apiResults: results.data
    });
});
 }

  render() {
    return (
      <div>
        <Nav/>
        <br/>
        <Header/>
        <br/>
        <SavedContainer>
          <SavedList handleDelete={this.handleDelete} apiResults={this.state.apiResults}/>
        </SavedContainer>
      </div>
    );
  };
};
export default Saved;