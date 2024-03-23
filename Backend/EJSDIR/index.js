const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// in express.static all the HTML, CSS files will be passed, so this public will serve all these files.
app.use(express.static(path.join(__dirname ,"/public/js")));
app.use(express.static(path.join(__dirname ,"/public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("hello");
})

app.get("/rolldice", (req, res) => {
    // We have stored the value that we want to display on the web page in a variable, just same like we do in the case of database.
    let diceVal = Math.floor(Math.random() * 6) + 1
    res.render("rolldice.ejs", { diceVal });
    // To access the variable we have to create a key value pair or simple key in the res.render
})

// app.get("/ig/:username", (req, res) => {
//     const followers = ["Ryle", "Atlas", "Lily"];
//     let { username } = req.params;
//     res.render("instagram.ejs", { username, followers});
// })


// Directly accessing the data from the json file for this.
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data) {
        res.render("instagram.ejs", { data});
    } else {
        res.render("error.ejs");
    }
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});