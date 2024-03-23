const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful!!");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// Defining the schema aloong with constraints
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  //It means not null
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [10, "Price is too low for Amazon selling"],
        // We have defined the custom error which will be printed if price is less than 10
        // console.log(err.errors.price.properties.message);
        // above command will print the exact error msg on screen means only that msg will be shown on the screen.
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: "String",
        enum: ["fiction", "non-fiction"],
    },
    genre: [String]
});

// Forming collection
const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     price: 1200
// });

// book1.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// let book3 = new Book({
//     title: "Atomic Habits",
//     author: "Thomas James",
//     price: 550,
//     category: "non-fiction",
// });

// book3.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Book.find()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Book.deleteOne({title: "Mathematics XII"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });