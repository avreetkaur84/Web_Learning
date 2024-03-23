console.log("Whether you will get successfull or not?")
let workingHours = 18
if (workingHours > 16) {
    console.log("More chances of becoming successful!")
}
if (workingHours < 16)
{
    console.log("You won't become successful:(")
}


console.log("Practice Question 1");
let light = "green";
if (light == "red") {
    console.log("Stop");
}
if (light == "yellow") {
    console.log("Slow Down");
}
if (light == "green") {
    console.log("Go");
}


console.log("Practice Question 2");
let marks = 93;
if (marks >= 80) {
    console.log("A+");
}
else if (marks < 80 && marks > 60) {
    console.log("A");
}
else if (marks < 60 && marks > 33) {
    console.log("B");
}
else if (marks < 33) {
    console.log("F");
}

// (marks < 60 && marks > 33) == (marks >= 33)
// Try to make the conditions as simple as possible!!


let size = "S";
if (size == "XL") {
    console.log("You have to pay Rs.250");
}
else if (size == "L") {
    console.log("You have to pay Rs.200");
}
else if (size == "M") {
    console.log("You have to pay Rs.100");
}
else if (size == "S") {
    console.log("You have to pay Rs.50");
}
else {
    console.log("Choose a correct size for ordering.");
}


// Program for a good string which starts with letter "a" and has lenth greater than "3".
let a = "apple";
if ((a[0] == "a") && (a.length > 3)) {
    console.log("Good string");
}
else {
    console.log("Bad string")
}


// Program for printing the day of the week using switch statement.
let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter a valid number which lies between 1 to 7");
}


// Trim and convert string to upper case.
let msg = "   help!  ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);


// Change an array
start = ["january", "july", "march", "august"]
// start.shift()
// start.shift()
// start.unshift("june")
// start.unshift("july")
// console.log(start)
// [july, june, march, august]
start.splice(0,1);
start.splice(1,0, "june");
// The above two steps work in one step.
// start.splice(0,2, "july", "june")
console.log(start);


// Reverse and find the index of "javascript"
lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse().indexOf("javascript"))


// Creating tic tac toe using array
tic = [ ["X", null, "O"], [null, "X", null], ["0", null, "X"] ];
console.log(tic);
tic[0][1] = "O";