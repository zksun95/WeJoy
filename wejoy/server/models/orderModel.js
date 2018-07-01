var mongoose = require("mongoose");
var OrderSchema = mongoose.Schema({
    id: Number,
    name: String,
    email:  String,
    phone: String
});

var orderModel = mongoose.model("OrderModel", OrderSchema);

module.exports = orderModel;