// Here we will write our server site code

const express = require("express");
const app = express();
const port = 8080;

// we can't directly access the data from post request, so this is used to encode the data from url
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// To accept the "register" request that is made in the index.html file
app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard Get Response. Welcome ${user}!`);
})

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`Standard Get Response. Welcome ${user}!`);
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});