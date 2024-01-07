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
        UserModel.addUser(newUser);
    } catch (err) {
        return res.json({success: false, msg: "Failed to register user"});
    }

    res.json({success: true, msg: 'User registered'});

});

exports.authenticate = asyncHandler(async (req, res, next) => {
    // getting post req to /authenticate
    // need to get usrname / pwd
    const username = req.body.username;
    const password = req.body.password;

    // gets user my username
    const QuestionableUser = UserModel.getUserByUsername(username);


    // UserModel.getUserByUsername(username, (err, user) => {
        // NEED TO REWRITE THIS AS A NON-CALL BACK THING
        // if(err) throw err;

        // if the user hasn't signed up,
        // return a message saying user not found
        if(!QuestionableUser) {
            return res.json({success: false, msg: "User not found"});
        }

        let isMatch = await UserModel.comparePassword(password, QuestionableUser.password); // problem

        // if user is found, compare password
        // UserModel.comparePassword(password, QuestionableUser.password, (err, isMatch) => {
            // if(err) throw err;
            if(isMatch) {
                // return res.json({success: true, msg: "User found"}); // test
                // if password matches, create token
                // const token = jwt.sign(QuestionableUser, config.secret, { // problem here (probably .sign(QuestionableUser))
                //     expiresIn: 604800 // 1 week
                // });
                //
                // return res.json({success: true, msg: "User authenticated"});
                return res.json({
                    success: true,
                    token: "JWT " + jwt.sign(QuestionableUser.toJSON(), config.secret, { expiresIn: 604800 }),
                    user: {
                        id: QuestionableUser._id,
                        name: QuestionableUser.name,
                        username: QuestionableUser.username,
                        email: QuestionableUser.email,
                    }
                });
            } else {
                return res.json({success: false, msg: "Wrong password"});
            }
        // });
    // })

});

exports.profile = asyncHandler(async (req, res, next) => {
    res.json({user: req.user});
});

exports.validate = asyncHandler(async (req, res, next) => {
    res.send("VALIDATE");
});
