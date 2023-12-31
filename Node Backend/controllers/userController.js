// place where we submit and store the messages
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require("../config/db");
var { UserModel } = require("../models/user");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// => localhost:3000/users
exports.register = asyncHandler(async (req, res, next) => {

    let newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    }) 

    try {
        user = UserModel.addUser(newUser);
    } catch (err) {
        return res.json({success: false, msg: 'Failed to register user'});
    }
    
    return res.json({success: true, msg: 'User registered'});

});

exports.authenticate = asyncHandler(async (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;
    
    try {
        user = await UserModel.getUserByUsername(username);
    } catch (err) {
        throw err;
    }
    if (!user) {
        res.json({success: false, msg: 'User not found'});
    }

    try {
        isMatch = await UserModel.comparePassword(password, user.password);
    } catch (err) {
        throw err;
    }
    if (isMatch) {
        const token = jwt.sign({ data: user }, config.secret, { // was {data: user}
            expiresIn: 604800 // 1 week in seconds
            });
            res.json({
            success: true,
            token: 'JWT '+ token,
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email
            }
            })
    } else {
        return res.json({success: false, msg: 'Wrong password'})
    }

});

// protected route
exports.profile = asyncHandler(async (req, res, next) => {
    res.json({ user: req.user }); // problem
    // console.log(user.username);
});

exports.validate = asyncHandler(async (req, res, next) => {
    res.send("VALIDATE");
});
