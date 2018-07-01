var jayson = require('jayson');

var client = jayson.client.http({
    port: 4000,
    hostname: "localhost"
});

//test
function test(a, b, cb){
    client.request("nothing", [a,b,b], function(err, error, res){
        if(err) throw err;
        console.log(res);
        cb(res);
    });
}

module.exports = {
    test: test
}