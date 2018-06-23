var express = require("express");
var app = express()
var restRouter = require('./routes/rest');
var mongoose = require("mongoose");

mongoose.connect("mongodb://root:root123@ds117061.mlab.com:17061/wejoy_db");
app.use("/api/v1", restRouter);

app.listen(3000, () => console.log('Example app listening on port 3000!'))