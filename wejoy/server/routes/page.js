var express = require("express");
var router = express.Router();
var path = require("path");

var fileServices = require("../services/files-services");


router.get(["/", "/events"], function(req, res){
    res.sendFile("index.html", {root: path.join(__dirname, '../../client/build/')});
});

module.exports = router;