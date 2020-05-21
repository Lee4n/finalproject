var axios = require("axios");
var db = require("../models")

function apiRoutes(app) {

    app.post("/api/ratings", function(req, res) {
        var newRating = req.body
        db.Rating.create(newRating).then(function(results) {
            res.json(results);
        });
    })
 
   app.get("/api/ratings", function(req, res) {
        db.Rating.find().then(function(results) {
            res.json(results);
        });
   });
    
};


module.exports = apiRoutes;