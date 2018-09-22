$(document).ready(function() {
    showFavs();
});
// Getting favorite restaurtants from db
function showFavs() {
    $.get("/api/favs", function(data) {
        results = data;
        console.log(data);
    })
// Clearing the div
    $("#favRestoName").empty();
// for loop to go through the array of favorite movies.
    for (var i =0; i < 20; i++) {
        var a = $("<div>");
        a.addClass("restaurant");
        a.attr("data-name", favRestaurants[i]);
        a.text(restaurants[i].name);
// appending restaurant name to list
        $("#favRestoName").append(a);
    }
};