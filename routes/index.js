var axios = require("axios");
var db = require("../models")

function apiRoutes(app) {

    app.get("/api/googlebooks/:title", function(req, res) {
        var title = req.params.title
   
        console.log(title)
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title).then(function(results) {
            console.log(results.data)
            res.json(results.data)  
        })
    })

    app.post("/api/books", function(req, res) {
        var newBook = req.body
        db.Book.create(newBook).then(function(results) {
            res.json(results);
        });
    })
 
   app.get("/api/books", function(req, res) {
        db.Book.find().then(function(results) {
            res.json(results);
        });
   });
    
   app.delete("/api/books/:id", function(req, res) {
    var id = req.params.id;
       db.Book.remove({_id: id}).then(function(results) {
           res.json(results);
       })
   })
};


module.exports = apiRoutes;