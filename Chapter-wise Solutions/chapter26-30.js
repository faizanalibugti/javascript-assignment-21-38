// Chapter No.26 to 30

// Task No.1

var n = prompt("Enter any positive integer?");
document.write("<h1> number: " + n);
document.write("<br> round off value: " + Math.round(n));
document.write("<br> floor value: " + Math.floor(n));
document.write("<br> ceil value: " + Math.ceil(n));


// Task No.2

var n = prompt("Enter any negative integer?");
document.write("<h1> number: " + n);
document.write("<br> round off value: " + Math.round(n));
document.write("<br> floor value: " + Math.floor(n));
document.write("<br> ceil value: " + Math.ceil(n));


// Task No.3

var n = prompt("Enter any number?");
document.write("<h1> The absolute value of " + n + " is " + Math.abs(n));


// Task No.4

// var n=prompt("Enter any number?");
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("<h1> random dice value: " + numberOfStars);


//Task No.5

// var n=prompt("Enter any number?");
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 2) + 1;
var numberOfStars = Math.floor(improvedNum);
if (numberOfStars === 1)
    document.write("<h1>" + numberOfStars + "<br> random coin value: Tails");
else
    document.write("<h1>" + numberOfStars + "<br> random coin value: Heads");


// Task No.6

// var n=prompt("Enter any number?");
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 100) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("<h1> random number between 1 and 100: " + numberOfStars);


// Task No.7

var weight = prompt("Enter your weight in kilograms?");
var parseWet = parseFloat(weight);
document.write("<h1> The weight of user is " + parseWet + " kilograms");


//Task No.08

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 10) + 1;
var numberSecret = Math.floor(improvedNum);

var userInput = prompt("Enter your any number in between 1 to 10?");
if (numberSecret === userInput)
    document.write("<h1> Congratulations the user");
else
    document.write("<h1> Try again" + numberSecret);
