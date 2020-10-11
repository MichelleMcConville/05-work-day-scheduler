// Variables List
var today = moment().format("dddd MMMM Do, YYYY");
var timeAsOfNow = moment().hour();
var hours = $("textarea");
var toDo = [];
var textBox;

//Set current Date in Jumbotron
$("#currentDay").text(today);
console.log(today);
console.log(timeAsOfNow);

//Check time @ set color
// function timeHighlight() {
//   $(".time-block").each(function () {
//     console.log(timeAsOfNow);

//     if ($(this).attr("id") < timeAsOfNow) {
//       console.log("I am past time");
//       $(this).("past");
//     }
//     if ($(this).attr("id") === timeAsOfNow) {
//       console.log("I am present time");
//       $(this).addClass("present");
//     }
//     if ($(this).attr("id") > timeAsOfNow) {
//       console.log("I am future time");
//       $(this).addClass("future");
//     }
//   }
// )};

// timeHighlight();


