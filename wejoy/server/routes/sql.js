var express = require("express");
var router = express.Router();
var eventService = require("../services/eventService");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var sqlService = require("../services/sqlService");

router.get("/eventstest", function (req, res){
    sqlService.getSqlEvent()
        .then(events => res.json(events));
});

module.exports = router;