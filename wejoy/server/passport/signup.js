//const jwt = require('jsonwebtoken');
//const User = require('mongoose').model('UserModel');
var User = require("../models/userModel");
const PassportLocalStrategy = require('passport-local').Strategy;
//const config = require('../config/confif.json');

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done)=>{
    const userData = {
        email: email.trim(),
        password: password.trim(),
        username: "23"
    };
    const newUser = new User(userData);
    console.log(newUser);
    newUser.save((err)=>{
        console.log('try save');
        if(err){
            return done(err);
        }
        console.log('saved');
        return done(null);
    });

    // return User.findOne({email: userData.email}, (err, user)=>{
    //     if(err){
    //         return done(err);
    //     }
    //     if(!user){
    //         const error = new Error('Incorrect email or password');
    //         error.name = 'IncorrectCredentialError';
    //         return done(error);
    //     }
    //     return user.comparePass(userData.password, (passwordError, valid)=>{
    //         if(passwordError){
    //             return done(passwordError);
    //         }
    //         if(!valid){
    //             const error = new Error('Incorrect email or password');
    //             error.name = 'IncorrectCredentialError';
    //             return done(error);
    //         }
    //         const payload = {
    //             sub: user._id
    //         };
    //         const token = jwt.sign(payload, config.jwtSecret);
    //         const data = {
    //             name: user.email
    //         };
    //         return done(null, token, data);
    //     });
    // });
});