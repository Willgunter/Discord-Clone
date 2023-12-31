// place where we submit and store the messages
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var { UserModel } = require("../models/user");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
    
    doSomething().catch((err) => console.log('Error in Message {test} Save :' + JSON.stringify(err, undefined, 2)));
        async function doSomething() {
            
            // why can't it display channel?
            // why is it not updating at all?
            res.send(await UserModel.find({}, { displayName:1, username:1, pwd:1, date:1, _id:0}).sort({_id:-1}));

        }
                
    // where we get all the messages from mongo + send all the messages to the backend (*very important*)

    // NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

});

// is this needed?
exports.post = asyncHandler(async (req, res, next) => {
    
    // let newUser = new UserModel({
    //     displayName: req.body.displayName, // might be displayname (n not capitalized)
    //     username: req.body.username,
    //     pwd: req.body.pwd,
    //     date: req.body.date,
    // });

    // UserModel.addUser(newUser, (err, user) => {
    //     if(err){
    //         res.json({success: false, msg: "Failed to register user"});
    //     } else {
    //         res.json({success: true, msg: "User registered"});
    //     }
    // });

    // passport.use(
    //     new LocalStrategy(async (username, password, done) => {
    //         try {
                
    //             const user = await UserModel.findOne({ username: username });
    //             if (!user) {
    //                 return done(null, false, { message: "Incorrect username" });
    //             };
    //             if (user.password !== password) {
    //                 return done(null, false, { message: "Incorrect password" });
    //             };
    //             return done(null, user);
    //         } catch(err) {
    //             return done(err);
    //         };
    //     })
    // );

    // passport.authenticate("local", (err, user, info) => {
    //     if (err) {
    //         // Error occurred during authentication
    //         res.locals.success = false;
    //         res.locals.message = "Authentication failed";
    //         // res.send(res.locals);

    //     } else if (!user) {
    //         // Authentication failed
    //         res.locals.success = false;
    //         res.locals.message = "No user";
    //     } else {
    //         // Authentication successful
    //         res.locals.success = true;
    //         res.locals.message = "nice job you son of a bitch";
    //     }
    //     res.json(res.locals);
    //     // res.send(res.locals);
    // })

    // res.send(res.locals.success);
    // module.exports = { res }; ???
});

// // NOT COMPLETED YET idk what we do know 
// exports.deleteUser = asyncHandler(async (req, res, next) => {
//     const userId = req.params.id; // Assuming the user ID is passed as a parameter

//     try {
//         const deletedUser = await UserModel.findByIdAndDelete(userId);
//         if (!deletedUser) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }
//         return res.status(200).json({ success: true, message: "User deleted successfully" });
//     } catch (err) {
//         return res.status(500).json({ success: false, message: "Internal server error" });
//     }
// });
