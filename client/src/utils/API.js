import axios from "axios";

export default {
    getAllDutyStations: function() {
        return axios.get("https://data.opendatasoft.com/api/records/1.0/search/?dataset=military-bases%40public&rows=10")
    },
    getDutyStationName: function(name) {
        return axios.get("https://data.opendatasoft.com/api/records/1.0/search/?dataset=military-bases%40public&rows=10&q=" + name)
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
