const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true) {
    if(guess == "quit") {
        console.log("User quit");
        break;
    }

    if (guess == random) {
        console.log("You Won!! Congrats!! Random was", random);
        break;
    } else if(guess < random) {
        guess = prompt("Hint : Your guess was too small. Try again!!");
    } else {
        guess = prompt("Hint : Your guess was too large. Try again!!");
    }
}