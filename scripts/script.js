var today = moment().format("dddd MMMM Do, YYYY");
var timeAsOfNow = moment().hour();
var hour = [h07, h08, h09, h10, h11, h12, h13, h14, h15, h16, h17, h18];
var toDo = [t07, t08, t09, t10, t11, t12, t13, t14, t15, t16, t17, t18];

var h07 = document.querySelector(".h07").textContent;
var h08 = document.querySelector(".h08").textContent;
var h09 = document.querySelector(".h09").textContent;
var h10 = document.querySelector(".h10").textContent;
var h11 = document.querySelector(".h11").textContent;
var h12 = document.querySelector(".h12").textContent;
var h13 = document.querySelector(".h13").textContent;
var h14 = document.querySelector(".h14").textContent;
var h15 = document.querySelector(".h15").textContent;
var h16 = document.querySelector(".h16").textContent;
var h17 = document.querySelector(".h17").textContent;
var h18 = document.querySelector(".h18").textContent;

var t07 = document.querySelector(".t07");
var t08 = document.querySelector(".t08");
var t09 = document.querySelector(".t09");
var t10 = document.querySelector(".t10");
var t11 = document.querySelector(".t11");
var t12 = document.querySelector(".t12");
var t13 = document.querySelector(".t13");
var t14 = document.querySelector(".t14");
var t15 = document.querySelector(".t15");
var t16 = document.querySelector(".t16");
var t17 = document.querySelector(".t17");
var t18 = document.querySelector(".t18");

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

//
h07 = parseInt(h07[0]);
h08 = parseInt(h08[0]);
h09 = parseInt(h09[0]);
h10 = parseInt(h10[0]);
h11 = parseInt(h11[0]);
h12 = parseInt(h12[0]);
h13 = parseInt(h13[0]);
h14 = parseInt(h14[0]);
h15 = parseInt(h15[0]);
h16 = parseInt(h16[0]);
h17 = parseInt(h17[0]);
h18 = parseInt(h18[0]);

//Saving ToDo list to local storage on click f(x)
//Row for 7:00 AM
$(".b07").on("click", function () {
    var lsContent = $(".t07").val();
    localStorage.setItem("07:00", lsContent);
  });
  //Row for 8:00 AM
  $(".b08").on("click", function () {
    var lsContent = $(".t08").val();
    localStorage.setItem("08:00", lsContent);
  });
  //Row for 9:00 AM
  $(".b09").on("click", function () {
    var lsContent = $(".t09").val();
    localStorage.setItem("09:00", lsContent);
  });
  //Row for 10:00 AM
  $(".b10").on("click", function () {
    var lsContent = $(".t10").val();
    localStorage.setItem("10:00", lsContent);
  });
  //Row for 11:00 AM
  $(".b11").on("click", function () {
    var lsContent = $(".t11").val();
    localStorage.setItem("11:00", lsContent);
  });
  //Row for 12:00 PM
  $(".b12").on("click", function () {
    var lsContent = $(".t12").val();
    localStorage.setItem("12:00", lsContent);
  });
  //Row for 1:00 PM
  $(".b13").on("click", function () {
    var lsContent = $(".t13").val();
    localStorage.setItem("13:00", lsContent);
  });
  //Row for 2:00 PM
  $(".b14").on("click", function () {
    var lsContent = $(".t14").val();
    localStorage.setItem("14:00", lsContent);
  });
  //Row for 3:00 PM
  $(".b15").on("click", function () {
    var lsContent = $(".t15").val();
    localStorage.setItem("15:00", lsContent);
  });
  //Row for 4:00 PM
  $(".b16").on("click", function () {
    var lsContent = $(".t16").val();
    localStorage.setItem("16:00", lsContent);
  });
  //Row for 5:00 PM
  $(".b17").on("click", function () {
    var lsContent = $(".t17").val();
    localStorage.setItem("17:00", lsContent);
  });
  //Row for 6:00 PM
  $(".b18").on("click", function () {
    var lsContent = $(".t18").val();
    localStorage.setItem("18:00", lsContent);
  });
  
  // Getting ToDo list from local storage
  $(".t07").val(localStorage.getItem("07:00"));
  $(".t08").val(localStorage.getItem("08:00"));
  $(".t09").val(localStorage.getItem("09:00"));
  $(".t10").val(localStorage.getItem("10:00"));
  $(".t11").val(localStorage.getItem("11:00"));
  $(".t12").val(localStorage.getItem("12:00"));
  $(".t13").val(localStorage.getItem("13:00"));
  $(".t14").val(localStorage.getItem("14:00"));
  $(".t15").val(localStorage.getItem("15:00"));
  $(".t16").val(localStorage.getItem("16:00"));
  $(".t17").val(localStorage.getItem("17:00"));
  $(".t18").val(localStorage.getItem("18:00"));
  
