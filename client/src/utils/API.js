import axios from "axios";

export default {
    getGoogleBooks: function(title) {
        return axios.get("/api/googlebooks/" + title)
    },
    saveBook: function(newBook) {
        return axios.post("/api/books", newBook)
    },
    displaySavedBooks: function() {
        return axios.get("/api/books")
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }

}
