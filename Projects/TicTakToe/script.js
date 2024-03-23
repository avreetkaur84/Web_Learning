console.log("Welcome to Tic Tac Toe");
let music = new Audio("Images/Game-Start.mp3");
let turnMusic = new Audio("Images/Click.mp3");
let gameover = new Audio("Images/Game-Over.mp3");
let turn = "X";

// Function to change turn
const changeTurn = () => {
    return turn === "X"?"0" : "X"
}

// Function to check win
const checkWin = () => {

}

// Game Logic
let boxes = document.getElementByClassName("box");
Array.from(boxes).forEach(element => )