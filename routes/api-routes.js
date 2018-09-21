// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const yelp = require('yelp-fusion');
// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'fLm01xvY7ht4ZpS0zFcE5EB3pf7DiVCM1FFp-u6A54ohEpm4IulyRf-MxxFsPzwMi2R1VHYlmy053IyN5RrmVK4y2OeaZH4doou3n6v-rKi5WdqbF-0bn5z74fKTW3Yx';
const client = yelp.client(apiKey);
// var members = require("../public/js/members");


module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    // console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      // console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/yelpRequest", function (req, res) {
        console.log(req.body);
    // client.search({ location: req.body.zipcode }).
    client.search({ location: "60608" }).
    then(response => {
      for (var i = 0; i < 20; i++) {
      restoName = response.jsonBody.businesses[i].name;
      restoRating = response.jsonBody.businesses[i].rating;
      restoImage =  response.jsonBody.businesses[i].image_url;
      restoType = response.jsonBody.businesses[i].categories[0].title; 
      restoLocation = response.jsonBody.businesses[i].location.display_address;
      restoPhone = response.jsonBody.businesses[i].display_phone
      // console.log(restoName);  
      // console.log(restoRating);
      // console.log(restoImage);
      // console.log(restoType);
      // console.log(restoLocation);
      // console.log(restoPhone);
      restoSearch = {
        name: restoName,
        rating: restoRating,
        image: restoImage,
        type: restoType,
        location: restoLocation,
        phone: restoPhone,
      };
      // var restoArr = [];
      // restoArr.push(restoSearch);
      // console.log(restoArr);
      // console.log(restoSearch[4]);
    
      // console.log(restoSearch);


           
      // console.log(JSON.stringify(places));
      } 
      return res.json(places) 
    }).catch(e => {
      console.log(e);
    });
    

  })
}




// GET route for user's favorite restaurants

// 

// POST route for saving a new restaurant into the datbase

// app.post("/api/newfav", function(req, res) {
//   console.log(req.body)
//   db.UserData.create({
//     restaurant_id:,
//     restaurant_name: req.body.title,
//     restaurant_rating: req.body.,
//     restaurant_zip: ,
//     restaurant_type:,
//     restaurant_image:,
//     restaurant_cost:,
//     restaurant_id:
//     restaurant_name:
//     restaurant_rating:
//     restaurant_zip: 
//     restaurant_type:
//     restaurant_image:
//     restaurant_cost:
//   })
//   .then(function(favs) {
//     res.json(favs);
//   });
// });



