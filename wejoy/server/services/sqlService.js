var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "db"
});



var getSqlEvent = function(){
    return new Promise((resolve, reject) =>{
        con.connect(function(err){
            con.query("SELECT * FROM events", function (err, result, fields) {
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        });
    });
}


module.exports = {
    getSqlEvent: getSqlEvent
}