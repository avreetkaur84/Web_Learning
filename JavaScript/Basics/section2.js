const arr1 = ["one", "two", "three"];
const arr2 = ["four", "five", "six"];

const arr3 = [...arr1, ...arr2];             // ... is used for spreading an array
// console.log(arr3);

// console.log(Array.isArray("Avreet"));       // to check whether a data is array or not
// console.log(Array.from("Avreet"));          // To convert into array

/*
    Objects can be declared as two types  - 1. literals (not singleton) 
                                            2. Constructors (always singleton)
*/

// Object Literal
const user = {
    name: "Ayan",
    age: 20,
    email: "ayan@gmail.com",
    location: "imagination",
    likes: ["sports", "business"]
}

// Oject can be accessed in two types
// console.log(user.name);
// console.log(user["name"]);

// Object.freeze(user);                      // after freezing, you can't change object values.

// fnction with object
user.greeting = function() {
    console.log("Greetings by me!!");
}

// console.log(user.greeting);
// console.log(user.greeting());

user.greeting2 = function() {
    console.log(`Greetings by ${this.name}`);
}

// console.log(user.greeting2());

// Constructor Object
// const user2 = new Object();
const user2 = {};
user2.name = "Ryle";
user2.email = "ryle@gmail.com";
// console.log(user2);

// To combine object - Object.assign() and spread
const o1 = {1 : "a", 2 : "b"};
const o2 = {3 : "c", 4 : "d"};
// const o3 = Object.assign({}, o1, o2);
const o3 = {...o1, ...o2};
// console.log(o3);

// console.log(Object.keys(o3));
// console.log(Object.values(o3));
// console.log(Object.entries(o3));

// Object destructuring
const user4 = {
    name: "Gu Jinze",
    profession: "Businessman",
    age: "23"
};

const {profession: prof} = user4;       // destructured - accessing profession value using prof only.
// console.log(prof);

// When you don't know how many arguments will be passed, then you use rst operator"..."
function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 300, 300));

// Passing onject in  function
function handleObject(anyObject) {
    // console.log(`${anyObject.username} is the username and ${anyObject.price} is the price`);
};

handleObject({
    username: "Atlas",
    price: 3400,
});


// this refers to current context , and basically works in objects. It will not work in only function
const userr = {
    username: "hitesh",
    profession: "teacher",

    welcomeMsg: function() {
        console.log(`${this.username} is ${this.profession} by profession.`)
    }
}

// userr.welcomeMsg();
// userr.username = "Sam";
// userr.welcomeMsg();

// Arrow function (explicit return)
const addTwo = (num1, num2) => {
    return num1 + num2;
};

// console.log(addTwo(3, 4));

// Arrow function (implicit return)
const subTwo = (num1, num2) => (num1 - num2);
// console.log(subTwo(5, 2));

// Returning object through arrow function using implicit return is used a lot in react
const objt = () => ({user: "Jude"});
// console.log(objt());

// Immediately invoked function expresiion, to remove the problem of global pollution
// (function chai() {
//     console.log("Connected");
// }) ();

// IIFE Arrow function
((name) => {
    console.log(`Connected two ${name}`);
}) ("avrrr");

// Turn object into array
// const emptyObj = {};
// Object.keys(emptyObj)       -    Using this, object is turned into array.