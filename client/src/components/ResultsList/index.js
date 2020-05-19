import React from "react";
import API from "../../utils/API";

function ResultsList(props) {
  function saveBook(book) {
    const savedBook = {
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      link: book.volumeInfo.infoLink,
      title: book.volumeInfo.title,
      image: book.volumeInfo.imageLinks.thumbnail
    };
    API.saveBook(savedBook)
  };
  return (
    <div>
      {props
        .apiResults
        .map((book) => {

          return (
            <div className="card" style={{
              width: '18rem;'
            }}>
              <div className="card-body">
                <a
                  style={{
                  marginLeft: '10px'
                }}
                  href={book.volumeInfo.infoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  type="button"
                  class="btn btn-outline-primary float-right">View</a>
                <button
                  type="button"
                  onClick={() => saveBook(book)}
                  class="btn btn-outline-primary float-right">Save</button>
                <p className="card-text">{book.volumeInfo.title}</p>
                <p className="card-text">{book.volumeInfo.authors[0]}</p>
                <div className="row">
                  <img
                    style={{
                    width: "200px",
                    height: "200px"
                  }}
                    src={book.volumeInfo.imageLinks.thumbnail}/>
                  <p className="col">{book.volumeInfo.description}</p>
                </div>
              </div>
            </div>
          )
        })
}
    </div>
  );
};

export default ResultsList;