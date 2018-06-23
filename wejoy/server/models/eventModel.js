var mongoose = require("mongoose");
var EventSchema = mongoose.Schema({
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