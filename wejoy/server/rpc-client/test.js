var client = require("./rpc-client")

client.test(1,2,(res)=>{
    console.log(res)
});