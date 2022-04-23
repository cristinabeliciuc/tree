
function showDate() {
  var myDiv1 = document.getElementById("myDiv1");

  var date = new Date();
  var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var dayName = dayList[date.getDay()];
  var monthName = monthNames[date.getMonth()];
  var today = ` ${date.getDate()} ${monthName} ${date.getFullYear()},  ${dayName} `;

  myDivDate.innerText = today;
}
setInterval(showDate, 1000);

//--------------------------------------------------------------------------------------------------------------------------------------------

function showTime() {
  var myDiv2 = document.getElementById("myDiv2");
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var time = hour + ":" + min + ":" + sec;
  myDivTime.innerText = time;
}
setInterval(showTime, 1000);

//--------------------------------------------------------------------------------------------------------------------------------------------


