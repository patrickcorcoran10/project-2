$(document).ready(function() {
  var userInput = {
    zip: ""
  }
  $('#zip').click(function() {
    userInput.zip = $("#userZip").val().trim();
    console.log(userInput.zip);
    document.getElementById('modal').style.display = "none"
    yelpRequestHandler(userInput)
  });


});
function yelpRequestHandler(userInput) {
$.post("/api/yelpRequest", userInput, function (data) {
  // console.log(data);
  var businesses = data.jsonBody.businesses;
  for (var i = 0; i < 20; i++) {
  // businesses[i];
  document.getElementById("restaurantName").innerHTML = businesses[i].name;
  document.getElementById("restaurantImage").innerHTML = ("<img src=" + businesses[i].image_url + " height=140 width=150 >");
  document.getElementById("restaurantType").innerHTML = businesses[i].categories[0].title;
  document.getElementById("restaurantLocation").innerHTML = businesses[i].location.display_address;
  document.getElementById("restaurantPhone").innerHTML = businesses[i].display_phone;


  // console.log(businesses[i].name);
  // console.log(businesses[i].image_url);
  // console.log(businesses[i].categories[0].title);
  // console.log(businesses[i].location.display_address);
  // console.log(businesses[i].display_phone);

  };
})
};

(function($) {
  "use strict";

  // manual carousel controls
  $('.next').click(function(){ $('.carousel').carousel('next');return false; });
  $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
  
})(jQuery);
