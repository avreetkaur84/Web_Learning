const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    taskName: {
        type: String,
        required: true,
    },
    taskDescription:String,
    taskCategory: String,
    priority: String,
    deadline: Date,
    completionStatus: Boolean,
    creationTime: {
        type: Date,
        default: Date.now
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;