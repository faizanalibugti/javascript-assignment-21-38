// Chapter No.31 to 34

// Task No.1

var rightNow = new Date();
document.write("<h1>" + rightNow);


// Task No.2

var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var rightNow = new Date();
var theMonth = rightNow.getMonth()
document.write("<h1> Current month: " + monthName[theMonth]);


// Task No.3

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
document.write("<h1> Today is " + nameOfToday);


// Task No.4

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (theDay === 0 || theDay === 6)
    document.write("<h1> its Fun Day ");
else
    document.write("<h1> Its working Day ");


// Task No.5

var now = new Date();
var theDate = now.getDate();
if (theDate < 15)
    document.write("<h1> First fifteen days of the month.");
else
    document.write("<h1> Last days of the month ");


// Task No.6

var firstDate = new Date("Jan 1, 1970");
var today = new Date();
var msTday = today.getTime();
var msFirstDate = firstDate.getTime();
// var msDiff=msRamzanDate-msTday;
var msDiff = msTday - msFirstDate;
var mintDiff = msDiff / (1000 * 60);
// dayDiff = Math.floor(dayDiff);

document.write("<h2> Current Date: " + today);
document.write("<br> Elapsed milliseconds since January 1, 1970: " + msDiff);
document.write("<br> Elapsed minutes since January 1, 1970: " + mintDiff);


// Task No.7

var now = new Date();
var theHours = now.getHours;
if (theHours >= 12)
    document.write("<h1> It's PM.");
else
    document.write("<h1> It's AM ");


// Task No.8

var laterDate = new Date("Dec 31, 2020");
document.write("<h1> Later date: " + laterDate)


// Task No.9

var ramzanDate = new Date("June 18, 2015");
var today = new Date();
var msTday = today.getTime();
var msRamzanDate = ramzanDate.getTime();
// var msDiff=msRamzanDate-msTday;
var msDiff = msTday - msRamzanDate
var dayDiff = msDiff / (1000 * 60 * 60 * 24);
dayDiff = Math.floor(dayDiff);
document.write("<h1> " + dayDiff + " days have passed since 1st Ramzan, 2015");

// var dateDiff= today-laterDate;
// document.write("<h1> Later date: " + laterDate)
// document.write("<br> today date: " + today)
// document.write("<br> Diff date: " + dateDiff)


// Task No.10

var referDate = new Date("Dec 05, 2015");
var beginningDate = new Date("Jan 1, 2015");
var msReferDate = referDate.getTime();
var msBeginningDate = beginningDate.getTime();
var msDiff = msReferDate - msBeginningDate;
var secondDiff = msDiff / (1000 * 60);
secondDiff = Math.floor(secondDiff);
document.write("<h1> On reference date " + referDate);

document.write("<br> " + secondDiff + " second had passed sience beginning of 2015");


// Task No.11

var today = new Date();
var oneHourAgo = new Date();
oneHourAgo.setHours(today.getHours() - 1);
document.write("<h1> Current date: " + today);
document.write("<br> 1 hour ago, it was " + oneHourAgo);


// Task No.12

var today = new Date();
var hundredYearsAgo = new Date();
hundredYearsAgo.setFullYear(today.getFullYear() - 100);
alert("Current date: " + today + "\n100 years back, it was " + hundredYearsAgo);


// Task No.13

var age = prompt("Enter your age");
var birthYear = new Date();
birthYear.setFullYear(birthYear.getFullYear() - age);

document.write("<h1> Your age is " + age);
document.write("<br> Your birth year is " + birthYear.getFullYear());


// Task No.14

var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var name = "ABC Customer";
var currentDate = new Date();
var month = currentDate.getMonth();
var consumedUnit = 410;
var pricePerUnit = 16;
var surcharge = 350;
var netAmount = consumedUnit * pricePerUnit;
var grossAmount = netAmount + surcharge;

document.write("<h1> K-Electric Bill </h1>");
document.write("<h2> <br>  Customer Name: " + name);
document.write("<br> Month: " + monthName[month]);
document.write("<br> Number of units: " + consumedUnit);
document.write("<br> Charges per unit: " + pricePerUnit);
document.write("<br><br> Net Amount Payable (within Due Date): " + netAmount);
document.write("<br> Late payment surcharge: " + surcharge);
document.write("<br> Gross Amount Payable (after Due Date): " + grossAmount);
