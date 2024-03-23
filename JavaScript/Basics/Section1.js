const accountId = 2378;
let emailId = "java@gmail";
var password = 345;
city = "Chandigarh";
let accountState;

console.table([accountId, emailId, password, city, accountState]);

let id = String(accountId);
console.log(typeof id);

console.log(`My account id is ${accountId} and password is ${password}`);

// To use string methods, you have to write in below format (string object)
const name = new String("Avreet");
console.log(name.length);

// Random number
const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max-min+1) + min));     // formula

// Date and Time
let myDate = new Date();
console.log(myDate.toString());

let myDate2 = new Date(2023, 0, 23);        //months start from 0 -- jan-0, feb-1 ...
console.log(myDate2.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);                 //Time is displayed in millisecond, it is used for comparison.

// This is used a lot
myDate2.toLocaleString('default', {
    weekday: "long",
})

/* 
Datatypes is of two types - primitive and non-primitive(reference)
1. Primitive - 7 types - 1. String
                         2. Number
                         3. Boolean
                         4. Null
                         5. Undefined
                         6. Symbol
                         7. BigInt
    --- Use stack memory -- copy of variable is created                         

2. Reference - 3 types - 1. Arrays
                         2. Objects
                         3. Functions
    --- Use heap memory -- reference of variable is passed
*/