const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//logger-morgan 
// app.use( (req, res, next) => {
//     req.time = new Date(Date.now());
//     console.log(req.method, res.hostname, req.path, req.time);
//     next();
// });

app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess")
    {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
    res.send("Data");
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

app.get("/err", (req, res) => {
    abcd = abcd;
})

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to Admin is forbidden!");
})

app.use((err, req, res, next) => {
    let {status=500, message="Some Error Occured"} = err;
    res.status(status).send(message);
})

// 404 error, when request does not match with any of the path
app.use((req, res) => {
    res.send("Page not found");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});

