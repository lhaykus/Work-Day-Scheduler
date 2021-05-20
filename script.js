$(document).ready(function () {

//Displaying the current day using moment.js
let today = moment().format("MMM Do, YYYY");
$("#currentDay").append(today);

//Variable for current hour
let currentHour = moment().format("h:mm:ss a");
$("#currentHour").append(currentHour);
let eventTime = document.getElementsByClassName("hour");

//Targeting the class "textarea" and creating a function for each element of that id
//to change the color of the textarea depedning on the time
$(".textarea").each(function() {
   eventTime = $(this).attr("id");

    
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

