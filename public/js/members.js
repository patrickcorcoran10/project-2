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
  console.log(data);
  var businesses = data.jsonBody.businesses;
  console.log(businesses);
  
})
}


$.post("/api/yelpRequest", zip, function(restaurants) {
  // Deal with data object restaurants
  console.log(zip);

})
