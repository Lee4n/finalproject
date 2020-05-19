import React, {Component} from "react";
import API from "../../utils/API";

class SavedList extends Component {

  render() {
    return (
      <div>
        {this
          .props
          .apiResults
          .map((book) => {

            return (
              <div className="card" style={{
                width: '18rem;'
              }}>

                <div className="card-body">
                  <button
                    style={{
                    marginLeft: '10px'
                  }}
                    type="button"
                    class="btn btn-outline-primary float-right"
                    onClick={() => this.props.handleDelete(book._id)}>Delete</button>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    type="button"
                    class="btn btn-outline-primary float-right">View</a>
                  <p className="card-text">{book.title}</p>
                  <p className="card-text">{book.authors}</p>
                  <div className="row">
                    <img
                      style={{
                      width: "200px",
                      height: "200px"
                    }}
                      src={book.image}/>
                    <p className="col">{book.description}</p>
                  </div>
                </div>
              </div>
            )

          })
}
      </div>
    );
  }

};

export default SavedList;