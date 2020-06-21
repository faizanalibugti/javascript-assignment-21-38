//  CHAPTERS NO.35 TO 38

// Task No.1
function currentDateTime() {
    var now = new Date();
    document.write("<h1>" + now);
}

// Task No.2
function greetings(firstName, lastName) {
    var fullName = firstName + lastName;
    document.write("<h1> Welcome " + fullName);
}

// Task No.3
function addTwoNum() {
    var a = +prompt("Enter first number?");
    var b = +prompt("Enter 2nd number?");
    var c = 0;
    c = add(a, b);
    document.write("<h1>Sum: " + c);
}
function add(num1, num2) {
    return (num1 + num2);
}

// Task No.4
function task354() {
    var a = +prompt("Enter first number?");
    var op = prompt("Enter operator for operatioin?");
    var b = +prompt("Enter 2nd number?");
    var c = 0;
    c = calculator35(a, op, b);
    document.write("<h1>Result: " + c);
}
function calculator35(num1, op, num2) {
    switch (op) {
        case "+":
            return (num1 + num2);
            break;
        case "-":
            return (num1 - num2);
            break;
        case "*":
            return (num1 * num2);
            break;
        case "/":
            return (num1 / num2);
            break;
        case "%":
            return (num1 % num2);
            break;
        default:
            return ("Invalid!")
    }
}

// Task No.5
function squares(num1) {
    document.write("<h1> Squares= " + (num1 * num1));
}

// Task No.6
function task356() {
    var n = +prompt("Enter any number for factorial?");
    document.write("<h1> Factorial of " + n + " is: " + factorial(n));
}
function factorial(num) {
    var fact = 1;
    for (let i = num; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}

// Task No.7
function countingPrint() {
    var startNum = +prompt("Enter start number?");
    var endNum = +prompt("Enter end limit?");
    for (let i = startNum; i <= endNum; i++) {
        document.write(i + "<br>");
    }
}

// Task No.8
function calculateHypotenuse() {
    var base = +prompt("Enter base of triangle?");
    var perpendicular = +prompt("Enter perpendicular?");
    var hypotenuse = calculateSquar(base) + calculateSquar(perpendicular);
    document.write("<h1> Hypotenuse of a right angle triangle is: " + calculateSquar(hypotenuse));


    function calculateSquar(num) {
        return (num * num);
    }
}

// Task No.9
function areaOfTriangle(width, height) {
    return (width * height);
}
function calculateAreaOfTriangle() {
    var width = prompt("Enter width of Triangle?");
    var height = prompt("Enter height of Triangle?");
    document.write("<h1> Area of Triangle is: " + areaOfTriangle(width, height))
}

// Task No.10
function palindrome(str) {
    var len = str.length;
    var mid = Math.floor(len / 2);
    for (var i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
function taskNo3510() {
    var str = prompt("Enter any string for Palindrome check?");
    if (palindrome(str)) {
        document.write("<h1> The string " + str + " is palindrome.")
    }
    else
        document.write("<h1> The string " + str + " is not palindrome.")
}

// Task No.11
function task3511() {
    stringTitalCase()
}

// Task No.12
function findLongestWord(str) {

    var strSplit = str.split(' ');

    var longestWord = 0;
    var longestIndex = 0;

    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
            longestIndex = i;
        }
    }
    // return longestWord; 
    return strSplit[longestIndex];
}
function task3512() {
    var str = prompt("Enter any string for finding longest word?")
    document.write("<h1> Longest word is: " + findLongestWord(str));
}

// Task No.13
function wordCount(str, word) {

    var a = str.toLowerCase();
    var a = a.split("");

    // search for pattern in a 
    let count = 0;
    for (let i = 0; i <= a.length; i++) {

        if (a[i] === word)
            count++;
    }
    return count;
}
function task3513() {
    var str = prompt("Enter string?");
    var word = prompt("Enter letter to check its occurrence?");

    document.write("<h1> Occurrence of letter " + word + " is: " + wordCount(str, word));
}

// Task No.14
function calCircumference(radi) {
    const pi = 3.14;
    return 2 * pi * radi;
}
function calArea(radi) {
    const pi = 3.14;
    return pi * radi * radi;
}
function task3514() {
    var r = prompt("Enter radius of circle?");
    document.write("<h1> The circumference is " + calCircumference(r));
    document.write("<br> The area is " + calArea(r));
}