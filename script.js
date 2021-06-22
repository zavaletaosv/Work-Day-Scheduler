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