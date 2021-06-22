// Displays Current Date and Time

$(document).ready(function() {
    var currentTime = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentTime);
})