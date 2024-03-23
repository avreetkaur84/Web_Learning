const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then(() => {
        console.log("connection successful!!");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//Kind of blueprint for what kind of things we want to store in our database table.
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Model class is used to construct documents in mongodb
// const Employee = mongoose.model("Employee", userSchema);

const User = mongoose.model("User", userSchema);

// Inserting single document data in the database

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48,
// });

// user1.save();

// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 48,
// });

// user2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// inserting many documents at one time in database

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
//     {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res) => {
//     console.log(res);
// });


// Printing the documents based on conditions
// User.find({ age: {$gt: 48}})
//     .then((res) => {
//         // console.log(res[0].name);
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



// Finding document on the basis of id.
// Mostly document is searched on the basis of id.
// User.findById("6515209a0b034a5a5957f65d")
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// For updating the data
// User.updateMany({age: {$gt: 48}}, {age: 55})
// User.updateOne({name: "Bruce"}, {age: 49})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Updating values using functions

// "new: true" returns the modified docuent instead of the old document.
// User.findOneAndUpdate({name: "Bruce"}, {age: 35}, {new: true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// For deleting the document
// User.deleteMany({age: 48})
// User.deleteOne({name: "Bruce"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// findByIdAndDelete()
