var today = moment().format("dddd MMMM Do, YYYY");
var timeAsOfNow = moment().hour();
var hour = [h10];
var toDo = [t10];

//Setting current Date in Jumbotron
$("#currentDay").text(today);
console.log(today);
console.log(timeAsOfNow);

//Checking time @ setting color
// function timeHighlight() {
//   $(".time-block").each(function () {
//     for (var i = 0; i < hour.length; i++) {
//       if (hour[i] < timeAsOfNow) {
//         toDo[i].classList.add("past");
//       } else if (hour[i] === timeAsOfNow) {
//         toDo[i].classList.add("present");
//       } else (hour[i] > timeAsOfNow)
//         toDo[i].classList.add("future");
//       }
//     })
//   }
// timeHighlight();

var h10 = document.querySelector(".h10").textContent;
h10 = parseInt(h10[0]);
var t10 = document.querySelector(".t10");

//Row for 10:00 AM
$(".b10").on("click", function () {
    var lsTime = $(".t10").val();
    localStorage.setItem("10:00", lsTime);
});
$(".t10").val(localStorage.getItem("10:00"));