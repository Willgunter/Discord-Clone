// place where we submit and store the messages

var { UserModel } = require("../models/user");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// => localhost:3000/users
exports.index = asyncHandler(async (req, res, next) => {
    
    saveUser().catch((err) => console.log('Error in User {test} Save :' + JSON.stringify(err, undefined, 2)));
        async function saveUser() {
            
            // why can't it display channel?
            // why is it not updating at all?
            // res.send(await UserModel.find({}, { displayName:1, username:1, pwd:0, date:1, _id:0}).sort({_id:-1}));
            res.send(await UserModel.find({}, { displayName:1, username:1, pwd:1, date:1, _id:0}).sort({_id:-1}));
            // res.send("test");
        }
                
    // where we get all the messages from mongo + send all the messages to the backend (*very important*)

    // NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

});

exports.post = asyncHandler(async (req, res, next) => {

    // it looks like the code is not being read here
    let newUser = new UserModel({
        displayName: req.body.displayName, // might be displayname (n not capitalized)
        username: req.body.username,
        pwd: req.body.pwd,
        date: req.body.date,
    });
    
    UserModel.addUser(newUser, (err, user) => { // problem???
        if(err){
            res.json({success: false, msg: "Failed to register user"});
        } else {
            res.json({success: true, msg: "User registered"});
        }
    });

});