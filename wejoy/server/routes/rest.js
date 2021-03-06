var express = require("express");
var router = express.Router();
var eventService = require("../services/eventService");
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

module.exports = router;