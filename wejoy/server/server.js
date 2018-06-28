var express = require("express");
var app = express()
var mongoose = require("mongoose");
var passport = require("passport");
var path = require("path");
var http = require("http");

var authRouter = require("./routes/auth");
var restRouter = require('./routes/rest');
var pageRouter = require("./routes/page");
var sqlRouter = require("./routes/sql");

var authorization = require("./middleware/auth_checker");

//mongoose.connect('mongodb://localhost/wejoy_db');
mongoose.connect("mongodb://root:root123@ds117061.mlab.com:17061/wejoy_db");

app.use(passport.initialize());
var localSignUpStrategy = require('./passport/signup');
var localLogInStrategy = require('./passport/login');
passport.use('local-signup', localSignUpStrategy);
passport.use('local-login', localLogInStrategy);

app.use('/auth', authRouter);
app.use('/sql', sqlRouter);
app.use('/member/api/v1', authorization);
app.use('/', pageRouter);
app.use(express.static(path.join(__dirname, "../client/build/")));
// TODO !
// app.use('/member/api/v1', authorization);
// app.use('/member/api/v1', restRouter);
app.use("/api/v1", restRouter);

// app.listen(3000, () => console.log('listening on port 3000!'))

app.use(function(req, res){
    res.sendFile("index.html", {root: path.join(__dirname, '../client/build/')});
});

// app.listen(3000, function(){
//     console.log('listen to 3000')
// })

var server = http.createServer(app);
//io.attach(server);
server.listen(3000);

server.on('error', onError);
server.on('listening', onListening);

function onError(error){
    throw error;
}

function onListening(){
    var addr = server.address();
    var bind = typeof addr == 'string'
               ? 'pipe ' + addr
               : 'port ' + addr.port;
    console.log("Listening on " + bind)
}