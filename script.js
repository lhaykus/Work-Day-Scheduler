$(document).ready(function () {
let today;

//Displaying the current day using moment.js
today = moment().format("MMM Do, YYYY");
$("#currentDay").append(today);

})
