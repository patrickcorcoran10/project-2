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

// function that takes the user inputed zip and uses it to query Yelp API and brings back the results.
function yelpRequestHandler(userInput) {
$.post("/api/yelpRequest", userInput, function (data) {
  // console.log(data);
  var businesses = data.jsonBody.businesses;
  for (var i = 0; i < 20; i++) {
  var name = businesses[i].name;
  var type = businesses[i].categories[0].title;
  var location = businesses[i].location.display_address;
  var phone = businesses[i].display_phone;


  // Printing the Query Results to the Page
  document.getElementById("restaurantName").innerHTML = name;
  document.getElementById("restaurantImage").innerHTML = ("<img src=" + businesses[i].image_url + " height=300 width=300 >");
  document.getElementById("restaurantType").innerHTML = type;
  document.getElementById("restaurantLocation").innerHTML = location;
  document.getElementById("restaurantPhone").innerHTML = phone;
  };
  $("#newFav").on("click", function(event) {
    event.preventDefault();

    var newFav = {
      name: name,
      type: type,
      // location: location,
      phone: phone
    }
    console.log(newFav);
// Route to post to the database
    $.post("/api/newFav", newFav) 
      .then(function(data) {
        console.log(data);
      })
    
  })
})
};

