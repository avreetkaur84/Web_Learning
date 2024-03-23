let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(event) {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");        //To create button
    delBtn.innerText = "delete";        //To show delete on button
    delBtn.classList.add("delete");    //To add class "delete"

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});



// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }
// We can't use the above because addEventListener only works for the existing elements not for the new elements that we will add.
// Means above function will delete "eat" and "sleep" task that are already present in the list but will not delete the new tasks that we will make.