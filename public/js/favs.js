$(document).ready(function() {
    showFavs();
});

function showFavs() {
    $.get("/api/favs", function(data) {
        results = data;
        console.log(data);
    })
};