// One to many simpel case.
const mongoose = require("mongoose");
const {Schema} = mongoose;

const MONGO_URL = "mongodb://127.0.0.1:27017/relationDemo";

main()
    .then(() => {
        console.log("connected to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new User ({
        username: "Sherlockholmes",
        addresses: [{
            location: "221B Baker Street",
            city: "London",
        }]
    })

    user1.addresses.push({location: "515 Walmart Street", city: "London"});
    let result = await user1.save();
    console.log(result);
}

addUsers();