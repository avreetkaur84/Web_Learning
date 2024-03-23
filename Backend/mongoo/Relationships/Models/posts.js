// Many to one multiple cases.
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
    name: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async() => {
    let user = await User.findOne({username: "Ayan"});

    let post2 = new Post({
        content: "Just hang in there, soon I will be infront of you:)",
        likes: 15575
    });

    post2.user = user;
    await post2.save();
}
// addData();

const getData = async() => {
    let res = await Post.findOne({}).populate("user");
    console.log(res);
}

// getData();