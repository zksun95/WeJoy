const express = require('express');
const passport = require('passport');
const router = express.Router();
const validator = require('validator');
var User = require("../models/userModel");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.post('/signup', jsonParser, (req, res, next)=>{
    //console.log(req.body);
    const validationResult = validateSignupForm(req.body);
    if(!validationResult.success){
        console.log('validation failed');
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }
    console.log(1);
    // return passport.authenticate('local-signup', (err)=>{
    //     console.log(err);
    //     if(err){
    //         console.log(err);
    //         if(err.name==='MongoError' && err.code===11000){
    //             return res.status(409).json({
    //                 success: false,
    //                 message: 'check the form',
    //                 errors: {email: 'Email already used'}
    //             });
    //         }
    //         return res.status(400).json({
    //             success: false,
    //             message: 'could not process the form'
    //         });
    //     }

    //     return res.status(200).json({
    //         success: true,
    //         message: 'Successfully signed up.'
    //     });
    // })(req, res, next);
    const userData = {
        email: req.body.email.trim(),
        password: req.body.password.trim(),
        username: req.body.username.trim()
    };
    const newUser = new User(userData);
    console.log(newUser);
    newUser.save((err)=>{
        console.log('try save');
        if(err){
            return res.status(400).json({
                success: false,
                message: 'could not process the form: '+err.message
            });;
        }
        console.log('saved');
        // return res.status(200).json({
        //     success: true,
        //     message: 'Successfully signed up.'
        // });

        return passport.authenticate('local-login', (err, token, userData)=>{
            if(err){
                console.log(err);
                if(err.name==='IncorrectCredentialsError'){
                    return res.status(400).json({
                        success: false,
                        message: ree.message
                    });
                }
                return res.status(400).json({
                    success: false,
                    message: 'could not process the form: '+err.message
                });
            }
            return res.status(200).json({
                success: true,
                message: 'log in after registration.',
                token,
                user: userData
            });
        })(req, res, next);

    });
});

router.post('/login', jsonParser, (req, res, next)=>{
    const validationResult = validateLoginForm(req.body);
    if(!validationResult.success){
        console.log('validation failed');
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }

    return passport.authenticate('local-login', (err, token, userData)=>{
        if(err){
            console.log(err);
            if(err.name==='IncorrectCredentialsError'){
                return res.status(400).json({
                    success: false,
                    message: ree.message
                });
            }
            return res.status(400).json({
                success: false,
                message: 'could not process the form: '+err.message
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in.',
            token,
            user: userData
        });
    })(req, res, next);
});

function validateSignupForm(payload){
    console.log(payload);
    const errors = {};
    let validForm = true;
    let message = '';

    if(!payload || typeof payload.email!=="string" || !validator.isEmail(payload.email)){
        validForm = false;
        errors.email = 'Unvalid Email address.';
    }

    if(!payload || typeof payload.password!=="string" || payload.password.trim().length<8){
        validForm = false;
        errors.email = 'Passord at least 8 characters';
    }

    if(!validForm){
        message = 'check the form.'
    }
    res =  {
        success: validForm,
        message,
        errors
    };
    console.log(res);
    return res;
}

function validateLoginForm(payload){
    console.log(payload);
    const errors = {};
    let validForm = true;
    let message = '';

    if(!payload || payload.email.trim().length===0 || typeof payload.email!=="string" || !validator.isEmail(payload.email)){
        validForm = false;
        errors.email = 'Please provide email.';
    }

    if(!payload || typeof payload.password!=="string" || payload.password.trim().length===0){
        validForm = false;
        errors.email = 'Please enter your password.';
    }

    if(!validForm){
        message = 'check the form.'
    }

    return {
        success: validForm,
        message,
        errors
    };
}

module.exports = router;