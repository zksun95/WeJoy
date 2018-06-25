const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
    email: {

    },
    id: Number,
    name: String,
    time: String,
    description:  String,
    location: String,
    owner: String,
    imageUrl: String
});

var eventModel = mongoose.model("EventModel", EventSchema);

module.exports = eventModel;