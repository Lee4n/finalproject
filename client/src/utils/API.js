import axios from "axios";

export default {
    getAllDutyStations: function() {
        return axios.get("https://data.opendatasoft.com/api/records/1.0/search/?dataset=military-bases%40public&rows=10")
    },
    getDutyStationName: function(name) {
        return axios.get("https://data.opendatasoft.com/api/records/1.0/search/?dataset=military-bases%40public&rows=10&q=" + name)
    },
    saveRating: function(newRating) {
        return axios.post("/api/ratings", newRating)
    },
    getRating: function(id) {
        return axios.get("/api/ratings/" + id)
    }

}
