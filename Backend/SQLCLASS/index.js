const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("-method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("visetews", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Waheguru@84#'
});

// For generating one random user data usimg Faker
// let getRandomUser = () => {
//     return {
//       id: faker.datatype.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   }

// console.log(getRandomUser());

// Generating and returning data for 100 users using Faker
let getRandomUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let q = "SHOW TABLES";

// Inserting new data

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];
for(let i=1; i<=100; i++) {
  data.push(getRandomUser());    // pushing 100 fake users data
}

// To insert data for two or more people at same time.
// let users = [
//   ["125", "125_newuser", "cde@gmail.com", "cde"],
//   ["126", "126_newuser", "def@gmail.com", "def"]
// ];

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

// A proper route has been created:)
// GET/     Fetch and show total number of users on our app
//Home route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];   //key value pair
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
})

//Show route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
})


// To Edit
app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  // console.log(id);
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      console.log(result);
      res.render("edit.ejs");
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
  // res.render("edit.ejs");
});


// To Update
app.patch("/user/:id", (req, res) => {
  res.send("updated");
})

app.listen("8080", () => {
  console.log("Server is listening to port 8080");
})