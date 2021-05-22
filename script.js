$(document).ready(function () {

//Displaying the current day using moment.js
let today = moment().format("MMM Do, YYYY");
$("#currentDay").append(today);

//Variable for current hour
let currentHour = moment().hours();

let eventTime = document.getElementsByClassName("hour");

//Targeting the class "textarea" and creating a function for each element of that id
//to change the color of the textarea depedning on the time
$("textarea").each(function() {
   eventTime = $(this).attr("id");
    console.log(this);
    
    //If the current hour is the less than the hour for the event on the calender the background is changed to the class "past"
        if(currentHour > eventTime) {
            $(this).addClass("past"); 
    //If current hour is the same as event hour then the background class is "present"
        } else if(currentHour === eventTime) {
            $(this).addClass("present");
    //If current hour is greater than the event hour than the background class is "future"
        } else if(currentHour < eventTime) {
            $(this).addClass("future");
      
      
        }
    })




//Saved to local storage
$(".saveBtn").on("click", function(){
  let text = $(this).siblings(".textarea").val();
  let time = $(this).parent("hour").val();
  console.log(this);

    localStorage.setItem(text, time);
});

$("#9 .textarea").val(localStorage.getItem("9"));
$("#10 .textarea").val(localStorage.getItem("10"));
$("#11 .textarea").val(localStorage.getItem("11"));
$("#12 .textarea").val(localStorage.getItem("12"));
$("#13 .textarea").val(localStorage.getItem("13"));
$("#14 .textarea").val(localStorage.getItem("14"));
$("#15 .textarea").val(localStorage.getItem("15"));
$("#16 .textarea").val(localStorage.getItem("16"));
$("#17 .textarea").val(localStorage.getItem("17"));


})

