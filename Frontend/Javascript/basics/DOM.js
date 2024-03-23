let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
let body = document.querySelector("body");
body.append(para1);
// document.querySelector("body").append(para1);   3,4 line combined
para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
body.append(h3);
h3.classList.add("blue");

let div1 = document.createElement("div");
body.append(div1);
div1.classList.add("box");

let head1 = document.createElement("h1");
head1.innerText = "I'm in a div";
div1.append(head1);

let para2 = document.createElement("p");
para2.innerText = "ME TOO!";
div1.append(para2);