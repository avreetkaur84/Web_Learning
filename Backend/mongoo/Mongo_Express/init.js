// This file is made to insert the data into the database

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");  

main()
    .then(() => {
        console.log("connection successful!!");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

// We have to pass multiple data, so we will create an array

let allChats = [
    {
        from: "Cardan",
        to: "Jade",
        msg: "Give up or you will die",
        created_at: new Date(),
    },
    {
        from: "Ronika",
        to: "Amay",
        msg: "When we will meet:)",
        created_at: new Date(),
    },
    {
        from: "Quely",
        to: "Whaly",
        msg: "I am in a problem...",
        created_at: new Date(),
    },
    {
        from: "Ayan",
        to: "Armaan",
        msg: "Bro, Whatsup!!",
        created_at: new Date(),
    },
    {
        from: "Parul",
        to: "vashnavi",
        msg: "You can do it girl!!",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);





// Inserting data into model
// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     message: "send me your exam sheets",          //message will be igored bcz. in schema you have defined msg not message.
//     created_at: new Date()     //Date function will automaticaaly fill in time and date
// });

// chat1.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

// let chat2 = new Chat({
//     from: "ryle",
//     to: "lily",
//     msg: "You know what I love you!!",
//     created_at: new Date()
// })

// chat2.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });