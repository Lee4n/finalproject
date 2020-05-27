var axios = require("axios");
var db = require("../models")
var passport = require("passport")
var LocalStrategy = require("passport-local").Strategy;

function apiRoutes(app) {

  // Register User
  app
    .post("/api/register", function (req, res) {
      var password = req.body.password;
      var newUser = new db.User({name: req.body.name, email: req.body.email, username: req.body.username, password: req.body.password});
      console.log(req.body)
      db
        .User
        .createUser(newUser, function (err, user) {
          if (err) 
            throw err;
          res
            .send(user)
            .end()
        });

    });

  // Endpoint to login
  app.post('/login', function (req, res, next) {
    
    console.log(req.body)
    next()
  }, passport.authenticate('local'), (req, res) => {
    console.log("logged in", req.user);
    let userInfo = {
      username: req.user.username
    }
    res.send(userInfo);
  } );

  // Endpoint to get current user
  app.get('/user', function (req, res) {
    res.send(req.user);
  })

  // Endpoint to logout
  app.get('/logout', function (req, res) {
    req.logout();
    res.send(null)
  });






  app.post("/api/ratings", function (req, res) {
    var newRating = req.body
    db
      .Rating
      .create({siteName: req.body.siteName, siteCountry: req.body.siteCountry})
      .then(function (results) {
        
        db.Rating.updateOne({
            _id: results._id
          }, {
            $push: {
              siteRating: newRating.siteRating
            }
          }, function (error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log(success);
              res.json(success)
            }
          });
      });

  })

  app.get("/api/ratings/:siteName", function (req, res) {
    db
      .Rating
      .find({siteName: req.params.siteName})
      .then(function (results) {
        res.json(results);
      });
  });

  app.put("/api/ratings/:id", function (req, res) {
    db
      .Rating
      .findOneAndUpdate({
        _id: req.params.id
      }, {
        $push: {
          siteRating: req.body
        }
      }, function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log(success);
          res.json(success)
        }
      });
  })

};

module.exports = apiRoutes;