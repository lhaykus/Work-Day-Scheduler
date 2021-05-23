$(document).ready(function () {

    //functions to change the textInput for each #id to the value that is in local storage
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
    //declaring variable using the class "hour"
    let eventTime = document.getElementsByClassName("hour");

    //function to determine color of the columns according to the time
    //Targeting the class "time-block" and creating a function where the time-blocks id (the hour)
    //is the event time, comparing event time to current time to determine what color the columns should be
    $(".time-block").each(function () {
        eventTime = $(this).attr("id");
        console.log(this);

        //If the eventTime is less than the currentHour the background is changed to the class "past"
        if (eventTime < currentHour) {
            $(this).addClass("past");
            //If eventTime is greater than the current hour then the background class is "future"
        } else if (eventTime > currentHour) {
            $(this).addClass("future");
            //Else the background class is "present"
        } else {
            $(this).addClass("present");
        }
    })



    //Saved to local storage
    //creating a function for when the save button is clicked the value is saved to the local storage
    $(".saveBtn").on("click", function (event) {
        //preventing the page from refreshing when the save button is clicked
        event.preventDefault();
    //creating a variable for the text the user will type into the text column, called toDoText
    //calling this's sibling "textInput" and putting the variable toDoText's value = to the value of the textInput, which is what the user will type in the column
        let toDoText = $(this).siblings(".textInput").val();
    //creating a variable for the time of the event on the calender
    //calling "hour" which is another sibling to this, so the variable time = to the text of the hour class, which is the hour number dipslayed on the calender
        let time = $(this).siblings(".hour").text();

//setting time and toDoText into local storage when the user clicks save
        localStorage.setItem(time, toDoText);
    });

})





 
 




