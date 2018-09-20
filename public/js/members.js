$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});

window.onload = function () {
  document.getElementById('button').onclick = function () {
    zip = $("#userZip").val();
    console.log(zip);
    document.getElementById('modal').style.display = "none"

'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'fLm01xvY7ht4ZpS0zFcE5EB3pf7DiVCM1FFp-u6A54ohEpm4IulyRf-MxxFsPzwMi2R1VHYlmy053IyN5RrmVK4y2OeaZH4doou3n6v-rKi5WdqbF-0bn5z74fKTW3Yx';

const searchRequest = {
  term:'food',
  categories: 'comfortfood, italian, thai',
  location: 'chicago, il',
  limit: 20, 
  price: '1, 2', 
  open_now: 'true',
  radius: 10000,

};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const filteredBusinesses = [];
  response.jsonBody.businesses.forEach(function(business) {
  filteredBusinesses.push({
    name: business.name,
    image: business.image_url,
    rating: business.rating,
    price: business.price,
    categories: business.categories[0].title,
    zip: business.location.zip_code,
  });
});
  const prettyJson = JSON.stringify(filteredBusinesses, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});
  };
// get zipcode
// $.post("ROUT GOES HERE", zipcode, function(restaurants) {
     // Deal with data object restaurants
// })
};