var express = require("express");
var router = express.Router();
var eventService = require("../services/eventService");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var sqlService = require("../services/sqlService");

router.get("/events", function (req, res){
    eventService.getEvents()
        .then(events => res.json(events));
});

router.get("/events/detail/:id", function (req, res) {
    var id = req.params.id;
    eventService.getEvent(+id)
        .then(event => res.json(event));
});

router.get("/events/:tag", function (req, res) {
    var tag = req.params.tag;
    eventService.getEventsByCategory(tag)
        .then(events => res.json(events));
});

router.post("/events", jsonParser, function (req, res) {

    sqlService.addSqlEvent(req.body)
        .then(function (event) {
            res.json(event);
        }, function (error) {
            res.status(400).send("Event name already exits");
        });

//add events to mongoDB
    // eventService.addEvent(req.body)
    //     .then(function (event) {
    //         res.json(event);
    //     }, function (error) {
    //         res.status(400).send("Event name already exists");
    //     });
});

module.exports = router;