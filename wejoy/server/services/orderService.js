var OrderModel = require("../models/orderModel");

var getAllOrders = function(email) {
    return new Promise((resolve, reject) => {
        OrderModel.find({"user_email": email}, function (err, orders) {
            if (err) {
                reject(err);
            }else{
                resolve(orders);
            }
        });
    });
}

var haveOrder = function(email, event_id) {
    console.log();
    return new Promise((resolve, reject) => {
        OrderModel.find({$and: [{"user_email": email}, {"event_id": event_id}]}, function (err, order) {
            console.log(order);
            console.log(err);
            if (err) {
                reject(err);
            }else{
                resolve(order);
            }
        });
    });
}

var addOrder = function (newOrder) {
    console.log(newOrder);
    return new Promise((resolve, reject) => {
        const now = new Date();
        console.log(now.getTime());
        OrderModel.find({$and: [{'user_email': newOrder.user_email}, {'event_id': newOrder.event_id}]}, function (err, order) {
            console.log(order);
            if(order.length>0){
                reject("Already registered.");
            }else{
                console.log("try");
                const now = new Date();
                newOrder.order_time = ""+((now.getTime()/1000)|0);
                //order_type = "n1"
                console.log(newOrder);
                var mongoOrder = new OrderModel(newOrder);
                mongoOrder.save();
                resolve(newOrder);
            }
        });
    })
}
module.exports = {
    getAllOrders: getAllOrders,
    haveOrder: haveOrder,
    addOrder: addOrder
}