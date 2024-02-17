// place where we submit and store the messages
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var { UserModel } = require("../models/user");

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
    
    doSomething().catch((err) => console.log('Error in get authentication Save :' + JSON.stringify(err, undefined, 2)));
        async function doSomething() {
            
            const users = await UserModel.find({}, { name: 1, color: 1, _id: 0 }).sort({ _id: -1 });
            const modifiedUsers = users.map(user => ({
                name: user.name,
                color: user.color || 'white' // Provide a default color if it is missing
            }));
            res.send(modifiedUsers);

        }
                

});
