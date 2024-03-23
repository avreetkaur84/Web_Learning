const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    console.log("Hii, I am root");
});

// app.get("/apple", (req, res) => {
//     console.log("You contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     console.log("You contacted oranfge path");
// });

// app.get("*", (req, res) => {
//     console.log("this path does not exist");
// });


// Creating the request to pass the variable in the url to search or reach the desired page.

// app.get("/:username/:id", (req, res) => {
//     console.log(req.params);
//     res.send("hello, I am root");
// });

app.get("/:username/:id", (req, res) => {
    let { username, id} = req.params;
    res.send(`welcome to the page of @${username}`);
});



// To print the queries that you have searched on the browser.
// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("no results");
// });

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q) {
        res.send("<h1>nothing search</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});