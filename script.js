$(document).ready(function () {

//Displaying the current day using moment.js
let today = moment().format("MMM Do, YYYY");
$("#currentDay").append(today);

//Variable for current hour
let currentHour = moment().format("H");

const eventTime = currentHour;



//Function to change the color of the text box depending on what time it is
$("textarea").each(function() {
  
   // let eventTime = $(this).attr("textarea")
    //If the current hour is the less than the hour for the event on the calender the background is changed to the class "past"
        if(currentHour > eventTime) {
            $(this).addClass("past");
    //If current hour is the same as event hour then the background class is "present"
        }else if(currentHour === eventTime) {
            $(this).addClass("present");
    //If current hour is greater than the event hour than the background class is "future"
        }else if(currentHour < eventTime) {
            $(this).addClass("future");
      
      
        }
    })




//Saved to local storage





//localStorage.text
//document.getElementById("textarea").innerHTML = localStorage.text;


})

