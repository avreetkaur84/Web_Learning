const express = require("express");
const app = express();
const port = 8080;
const path = require("path");       //To attach the folders(views, public) path

// For creating automatically unique id's.
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended: true}));     //To read the url's and content passed inside it.

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        // uuidv4 function will create unique id for each post
        id: uuidv4(),
        username: "Avreet",
        content: "Work hard, success is waiting for you!!!!"
    },
    {
        id: uuidv4(),
        username: "Eliza",
        content: "Enjoy your life, you won't take anything with you!!"
    },
    {
        id: uuidv4(),
        username: "Ryle",
        content: "Do whatever you want, life is too short to regret!!"
    },
]


// Creating simple route to get requests.
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// this will bring the form where we can fill the details regarding our new post.
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

// This will fetch the data from the new form posts and will also add the new post to the array.
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    // To go back to the posts page where all the posts are displayed.
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    // this will match the id of the post from the array of posts.
    let post = posts.find((p) => id === p.id);
    // Specific post will bw displayed on new page with this.
    res.render("show.ejs", { post });
});

// patch request is made to edit the post
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    res.send("patch request working");
})

app.listen(port, () => {
    console.log("Listening to port: 8080");
});