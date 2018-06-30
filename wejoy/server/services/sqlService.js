var mysqlModel = require("mysql-model");
var mysql = require("mysql");


var MySqlDB = mysqlModel.createConnection({
    host     : 'localhost',
    user : 'root',
    password : '123456',
    database : 'db',
});

events = new MySqlDB({tableName: "events"});


var getSqlEvent = function(){
    return new Promise((resolve, reject) =>{
        events.find('all', function (err, rows) {
            if(err)
                reject("lol"+err);
            else
                resolve(rows);
        })
    });
}



// var addSqlEvent = function( newEvent ){
//
//     return new Promise((resolve, reject) => {
//         con.getConnection(function(err) {
//             if (err) throw err;
//             console.log("Connected!");
//             var sql = "INSERT INTO events (event_name, event_date, event_start_time, event_end_time, event_location, event_introduction, event_organizer_id) VALUES ('Nodejs event','june','17:00', '18:00', 'beijing', 'this is the introduction', 1);";
//             con.query(sql, function (err, result) {
//                 if (err) {
//                     reject(err);
//                 }else{
//                     resolve(result);
//                 }
//             });
//         });
//     })
// }

module.exports = {
    getSqlEvent: getSqlEvent
}

