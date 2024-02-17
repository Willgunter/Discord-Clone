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
        color: req.body.color,
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

    if (password == null) {
        return res.json({success: false, msg: 'Please enter a username and/or password'});
    }
    
    try {
        user = await UserModel.getUserByUsername(username);
    } catch (err) {
        throw err;
    }

    if (user == null) {
        return res.json({success: false, msg: 'User not found'});

    }

    
    isMatch = await UserModel.comparePassword(password, user.password);


    if (isMatch) {
        const token = jwt.sign({ data: user }, config.secret, {
            expiresIn: 604800 // 1 week in seconds
            });
            return res.json({
            success: true,
            token: 'JWT '+ token,
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                color: user.color
            }
            })
    } else {
        return res.json({success: false, msg: 'Wrong password'})
    }

});

// protected route
exports.profile = asyncHandler(async (req, res, next) => {

    res.json({ user: req.user });

});

// delete maybe?
exports.index = asyncHandler(async (req, res, next) => {
    getUsers().catch((err) => console.log('Error in Message {test} Save :' + JSON.stringify(err, undefined, 2)));
        async function getUsers() {
            
            res.send(await UserModel.find({}, { _id:1}));
        }
});

exports.validate = asyncHandler(async (req, res, next) => {
    res.send("VALIDATE");
});

exports.changecolor = asyncHandler(async (req, res, next) => {

    const username = req.body[0];
    const color = req.body[1];
    
    try {
        user = await UserModel.getUserByUsername(username);
    } catch (err) {
        res.json({success: false, msg: 'white'}); // default color if glitch for some reason happens
        throw err;
    }
    
    user.color = color;
    user.save();
    res.json({success: true, msg: user.color});

});