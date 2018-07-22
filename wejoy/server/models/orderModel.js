var mongoose = require("mongoose");
var OrderSchema = mongoose.Schema({
    //id: Number,
    user_email: String,
    event_id: Number,
    order_time: String,
    order_type: String,
});

var orderModel = mongoose.model("OrderModel", OrderSchema);

module.exports = orderModel;