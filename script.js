$(document).ready(function () {

$("#9 .textInput").val(localStorage.getItem("9"));
$("#10 .textInput").val(localStorage.getItem("10"));
$("#11 .textInput").val(localStorage.getItem("11"));
$("#12 .textInput").val(localStorage.getItem("12"));
$("#13 .textInput").val(localStorage.getItem("13"));
$("#14 .textInput").val(localStorage.getItem("14"));
$("#15 .textInput").val(localStorage.getItem("15"));
$("#16 .textInput").val(localStorage.getItem("16"));
$("#17 .textInput").val(localStorage.getItem("17"));




//Displaying the current day using moment.js
let today = moment().format("MMM Do, YYYY");
$("#currentDay").append(today);

//Variable for current hour
let currentHour = moment().hours();

let eventTime = document.getElementsByClassName("hour");

//Targeting the class "textarea" and creating a function for each element of that id
//to change the color of the textarea depedning on the time
$(".textInput").each(function() {
   eventTime = $(this).attr("id");
    console.log(this);
    
    //If the current hour is the less than the hour for the event on the calender the background is changed to the class "past"
        if(currentHour > eventTime) {
            $(this).addClass("past"); 
    //If current hour is the same as event hour then the background class is "present"
        } else if(currentHour < eventTime) {
            $(this).addClass("future");
    //If current hour is greater than the event hour than the background class is "future"
        } else{
                $(this).addClass("present");
        }
    })




//Saved to local storage
$(".saveBtn").on("click", function(event){
    event.preventDefault();

  let toDoText = $(this).siblings(".textInput").val();
  let time = $(this).parent(".row").attr("id");
 

    localStorage.setItem(time, JSON.stringify(toDoText));
});

})

