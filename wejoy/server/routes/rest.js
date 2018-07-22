var express = require("express");
var router = express.Router();
var eventService = require("../services/eventService");
var orderService = require("../services/orderService");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();


router.get("/events", function (req, res){
    eventService.getEvents()
        .then(events => res.json(events));
});

router.get("/events/:id", function (req, res) {
    var id = req.params.id;
    eventService.getEvent(+id)
        .then(event => res.json(event));
});

router.post("/events", jsonParser, function (req, res) {
    eventService.addEvent(req.body)
        .then(function (event) {
            res.json(event);
        }, function (error) {
            res.status(400).send("Event name already exists");
        });
});

router.get("/orders/:order", function (req, res){
    var order = req.params.order.split("&");
    console.log(req.params.order);
    //console.log(order[0]);
    //console.log(order[1]);
    orderService.haveOrder(order[0], order[1])
        .then(order => res.json(order));
});

router.post("/orders", jsonParser, function (req, res) {
    orderService.addOrder(req.body)
        .then(function (order) {
            res.json(order);
        }, function (error) {
            res.status(400).send("order already exists");
        });
});

module.exports = router;