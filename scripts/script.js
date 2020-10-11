//Set date stamp @ top of page
var today = moment().format("dddd MMMM Do, YYYY");
var timeAsOfNow = moment().hour();
var tasks = [];

//Set current Date in Jumbotron
$("#currentDay").text(today);
console.log(today);
console.log(timeAsOfNow);

//Check time @ set color
// function timeHighlight() {
//   $(".hour").each(function () {
//     console.log(timeAsOfNow);

//     if ($("textarea").attr("id") < timeAsOfNow) {
//       console.log("I am past time");
//       $(this).classList.add("past");
//     } else if ($("textarea").attr("id") > timeAsOfNow) {
//       console.log("I future time");
//       $(this).classList.add("future");
//     } else {
//       console.log("I am present time");
//       $(this).classList.add("present");
//     }
//   });
// }
// timeHighlight();


