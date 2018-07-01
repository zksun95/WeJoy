const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const config = require('../config/config.json');

module.exports = (req, res, next) => {
    console.log("checking auth");

    if(!req.headers.authorization){
        return res.status(401).end();
    }

    const token = req.headers.authorization.split(' ')[1];

    console.log("token: "+token);

    return jwt.verify(token, config.jwtSecret, (err, decoded)=>{
        console.log(decoded);
        if(err){
            return res.status(401).end();
        }
        const email = decoded.sub;

        return User.findById(email, (userErr, user)=>{
            if(userErr || !user){
                return res.status(401).end();
            }
            return next();
        });
    });
};
