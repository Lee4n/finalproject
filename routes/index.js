var axios = require("axios");
var db = require("../models")
var passport = require("passport")
function apiRoutes(app) {

  // Register User
  app
    .post('/register', function (req, res) {
      var password = req.body.password;

      var newUser = new db.User({name: req.body.name, email: req.body.email, username: req.body.username, password: req.body.password});

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
  app.post('/login', passport.authenticate('local'), function (req, res) {
    res.send(req.user);
  });

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
        var objSiteRating = {
          siteRep: req.body.siteRep,
          siteLoc: req.body.siteLoc,
          siteFacilities: req.body.siteFacilities,
          siteSocial: req.body.siteSocial
        }
        db
          .Rating
          .findOneAndUpdate({
            _id: results._id
          }, {
            $push: {
              siteRating: objSiteRating
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

  app.get("/api/ratings/:id", function (req, res) {
    db
      .Rating
      .find({_id: req.params.id})
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