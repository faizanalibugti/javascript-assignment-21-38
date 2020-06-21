// Chapter No.21 to 25

// Task No. 1

var firstName = prompt("Enter First Name!");
var lastName = prompt("Enter Last Name!");
var fullName = firstName + " " + lastName;
document.write("<h1> Welcome " + fullName);


// Task No.2

var mobile = prompt("Enter your favorite mobile phone model!");

document.write("<h1> My favorite phone is: " + mobile);
document.write("<br>Length of string " + mobile.length);


// Task No.3

var word = "Pakistan";
var searchedIndex = 0
for (let i = 0; i <= word.length; i++) {
    if (word[i] === searchWord) {
        searchedIndex = i;
        break;
    }
}
document.write("<h1> String: " + word);
document.write("<br> Index of 'n': " + searchedIndex);


// Task No.4

var str = "Hello world.";
var searchedIndex = 0
// var n = str.indexOf("e", 5);
// document.write(n);
var indexArr = [];
var searchWord = 'l'
for (let i = 0; i <= str.length; i++) {
    if (str[i] === searchWord) {
        indexArr.push(i);
    }
}
document.write("<h1> String: " + str + "<br> Last index of 'l': " + indexArr[indexArr.length - 1]);


// Task No.5

var str = "Pakistan";
var searchWord;
// for(let i=0; i<str.length; i++){
//     if (i ===3)
//     {
//         searchWord=str(i);
//         // document.write(i);
//         break;
//     }
// }
document.write("<h1>String: " + str);
document.write("<br> Character at index 3:" + str[3]);



// Task No.6

var str1 = "Hello ";
var str2 = "world!";
var str3 = " Have a nice day!";
var res = str1.concat(str2, str3);
var firstName = prompt("Enter First Name!");
var lastName = prompt("Enter Last Name!");
var fullName = firstName.concat(lastName);
document.write("<h1> Welcome " + fullName);


// Task No.7

var str = "Hyderabad";
var res = str.replace("Hyder", "Islam");
document.write("<h1> City: " + str + "<br> After replacement: " + res);


// Task No.8

var str = "Ali and Sami are best friends. They play cricket and football together.";
var res = str.replace(/and/g, "&");
document.write("<h1> Actual string: " + str + "<br> After replacement: " + res);


// Task No.9

var str = "472";
var num = parseInt(str);
document.write("<h1> Value: " + str + "<br> Type: string");
document.write("<h1> <br> Value: " + num + "<br> Type: number");


// Task No.10

var str = prompt("Enter any text!");
var res = str.toLocaleUpperCase();
document.write("<h1> User input: " + str);
document.write("<br>Upper case " + res);


// Task No.11

var str = prompt("Enter any text!");
// var res = str.toLocaleUpperCase();
// var res = str.toUpperCase();
document.write("<h1> User input: " + str);

str = str.toLowerCase();
str = str.split(' ');

for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

}
str.join(' ');

// var strCase=str.replace(/,/g, " - ")
// var res = str.replace(/,/g, "&");
document.write("<br>Title case: " + str);
// document.write("<br>Title case "+ res);


// Task No.12

var num = 35.36;
// var str=num.toString();
// var myTrunc = Math.trunc(num);
var myTrunc = num.toFixed(4);

document.write("<h1> Number: " + num);
document.write("<br> Result: " + myTrunc);


// Task No.13

var userName = prompt("Enter Username!");
var found = 0
for (let i = 0; i <= userName.length; i++) {
    if (userName[i] === '@' || userName[i] === '.' || userName[i] === ',' || userName[i] === '!') {
        // document.write("Please enter a valid username!");
        found = 1;
        break;
    }
}
if (found)
    document.write("Please enter a valid username!");
else
    document.write("Thank you! you entered a valid username");


// Task No.14

var a = ["cake", "apple pie", "cookie", "chips", "patties"]
var order = prompt("Welcoe to ABC Bakery. What do you want to order sir/Ma'am?");
var found = 0, i = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] === order) {
        // document.write(order+" is available at index "+i +"in our bakery");
        found = 1;
        break
    }

}
if (found) {
    document.write(order + " is available at index " + (i + 1) + "in our bakery");
}
else {
    document.write("We are sorry. " + order + " is not available in our bakery.")
}


// Task No.15

var password = prompt("Enter valid passwordz");
var found = 0, i = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] === order) {
        // document.write(order+" is available at index "+i +"in our bakery");
        found = 1;
        break
    }

}
if (found) {
    document.write(order + " is available at index " + (i + 1) + "in our bakery");
}
else {
    document.write("We are sorry. " + order + " is not available in our bakery.")
}



// Task No.16

var str = "University of Karachi";


str = str.split('');

for (let i = 0; i < str.length; i++) {
    document.write(str[i] + "<br>");
}


// Task No.17

var str = prompt("Enter any input?");
document.write("<h1> User input: " + str);
document.write("<br> Last character: " + str[str.length - 1])


// Task No.18

var str = "The quick brown fox jumps over the lazy dog.";
var word = "the";
var a = str.toLowerCase();
var a = a.split(" ");

// search for pattern in a 
let count = 0;
for (let i = 0; i <= a.length; i++) {

    if (a[i] === word)
        count++;
}
document.write("<h1> Text: " + str);
document.write("<br> There are " + count + " occurrence(s) of word" + word)
