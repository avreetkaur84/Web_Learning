// for(let i=1; i<=15; i++) 
// {
//     if (i%2 != 0)
//     {
//         console.log(i);
//     }
// }

// //Above reverse output but in fewer steps.

// console.log("Backwards!!")

// for(let i=15; i>=1; i=i-2)
// {
//     console.log(i);
// }

// // Multiplication table of 5
// for (let i=5; i<=50; i+=5)
// {
//     console.log(i);
// }

// console.log("Random table");

// // Random number multiplication table
// // let n = prompt("Enter a number");
// // c = n
// // for (let i=n; i<=(c*10); i++)
// // {
// //     if (i%n == 0)
// //     {
// //         console.log(i);
// //     }
// // }

// // same above program with fewer steps
// //let n = prompt("Write your number");
// // We have to change the "n" into interger bcz. prompt only accepts string.
// // n = parseInt(n);
// // for(let i=n; i<=n*10; i=i+n)
// // {
// //     console.log(i);
// // }


// // Print numbers from 0 to 20 using while loop
// console.log("Printing numbers from 0-20.")
// let i = 0;
// while(i<=20) 
// {
//     console.log(i);
//     i++;
// }


// console.log("Guess the favourite movie")

// // Ask the user to guess your fav movie
// // let favmovie = "dreamer";
// // guess = prompt("Guess the favourite movie of creator.");

// // while ((guess != favmovie) && (guess != "quit"))
// // {
// //     guess = prompt("Wrong guess, Please try again.")
// // }

// // if (guess == favmovie)
// // {
// //     console.log("You are a amazing as you guessed the right movie.")
// // }


// console.log("Nested loops with nested arrays")
// let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonderwoman", "flash"] ];
// for (let i=0; i<heroes.length; i++)
// {
//     console.log(`List #${i}`);
//     for (let j=0; j<heroes[i].length; j++)
//     {
//         console.log(heroes[i][j]);
//     }
// }

// console.log("Printing students marks usinng nested loops in nested arrays");
// let student = [ ["avreet", 84], ["aviraj", 100], ["Teerva", 98] ];
// for (i=0; i<student.length; i++)
// {
//     console.log(`Name of student with score #${i}`);
//     for (j=0; j<student[i].length; j++)
//     {
//         console.log(j, ":", student[i][j]);
//     }
// }


// Generate random between 1 and 100
// num = Math.ceil(Math.random() * 100);
// console.log(num);

// num2 = Math.floor(Math.random() * 5) + 1;
// console.log(num2);

// // Generating random numbers between 21 and 25
// num = Math.ceil(Math.random() * 5) + 21;
// console.log(num);


// Create a function that generates random numbers in a dice from 1 to 6.
function diceNumGenerator() {
    num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
}

// A function to print the average of 3 numbers
function average(a, b, c) {
    ave = (a+b+c)/3;
    console.log(ave);
}

// average(23, 45, 65);


// function to print multiplication table of a number
function multiplicationTable(number) {
    for (let i=number; i<=(number*10); i+=number) {
        console.log(i);
    }
}
// multiplicationTable(4)


// Function that returns the sum of numbers from 1 to n
function sumOfN(num) {
    sum = 0;
    for (i=1; i<=num; i++) {
        sum += i;
    }
    return sum;
}

// console.log(sumOfN(9));


// Function that returns the concatenation of all strings present in array.
 function arrayConcat(arr) {
    let string = "";
    for (let i=0; i<=arr.length-1; i++) {
        // console.log(arr[i]);
        string = string + arr[i];
    }
    return string;
 }

 arra = ["avreet", "aviraj", "armaan", "onkar"];
console.log(arrayConcat(arra));