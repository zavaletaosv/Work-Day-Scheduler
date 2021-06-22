// Displays Current Date and Time

$(document).ready(function() {
    var currentTime = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentTime);
})

// Event Listener: Save Button

$(".saveBtn").on("click", function() {
    var textArea = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, textArea);
})

// Used to Store Inputs to Local Storage

$("#hour0900 .description").val(localStorage.getItem("hour0900"));
$("#hour1000 .description").val(localStorage.getItem("hour1000"));
$("#hour1100 .description").val(localStorage.getItem("hour1100"));
$("#hour1200 .description").val(localStorage.getItem("hour1200"));
$("#hour1300 .description").val(localStorage.getItem("hour1300"));
$("#hour1400 .description").val(localStorage.getItem("hour1400"));
$("#hour1500 .description").val(localStorage.getItem("hour1500"));
$("#hour1600 .description").val(localStorage.getItem("hour1600"));
$("#hour1700 .description").val(localStorage.getItem("hour1700"));