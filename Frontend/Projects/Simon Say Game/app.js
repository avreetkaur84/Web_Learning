let gameSeq = [];       //To track the button flashes that computer will generate during game
let userSeq = [];       //To track button flashes that user will generate while playing game.

let btns = ["yellow", "red", "purple", "green"];        //This array is generated to help in part for selecting a button that will flash randomly.

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

//To start the game by pressing any key, keypress and addEventListener is used.
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});
//if condition will execute only if game is not started, if game is running and we will press any key then it won't affect theh game as if condition will not execute.

//gameFlash is made to flash the random button that computer wants.
//flash class will change the background color of the button.
//set timeout function is used to remove the flash class after certain time in order to give the button a flash effect.
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
};

//userFlash is made to flash the random button that  user presses.
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
};

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);        //To generate a random index for btns array.
    let randColor = btns[randIdx];                      //For selecting the color that is present on the randomly selected array
    let randbtn = document.querySelector(`.${randColor}`);      //for accessing randomly selected color button with its class name.
    
    //Pushing the randomly generated color into the game sequence array with the help of push function.
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    gameFlash(randbtn);                                          //For flashing randomly selected button.
};

function checkAns() {
    //console.log("current level: ", level);
    let idx = level-1;

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            levelUp();
        }
    } else {
        h2.innerText = `Game Over! Press any key to start.`;
    }
}

//Ater button is pressed, this function will execute.
function btnPress() {
    //console.log(this);
    let btn = this;     //this is the button that was pressed.
    userFlash(btn);      //made to flash the pressed button.

    //extracting the color name choosed by the user by using id which is solely made for accessing color.
    //getAttribute function is used to extract the name of the attribute passed in it.
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns();
};

// This function is made to catch the movement of button that was pressed out of all the buttons.
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
};