// place where we submit and store the messages
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var { UserModel } = require("../models/user");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// is this needed?
exports.post = asyncHandler(async (req, res, next) => {
    // Function one, setting up LocalStrategy
    passport.use(
        new LocalStrategy(async (username, password, done) => {
            try {
                const user = await UserModel.findOne({ username: username });
                if (!user) {
                    return done(null, false, { message: "Incorrect username" });
                };
                if (user.password !== password) {
                    return done(null, false, { message: "Incorrect password" });
                };
                return done(null, user);
            } catch(err) {
                return done(err);
            };
    })
      );
      passport.authenticate("local", {
          successRedirect: "/suc",
          failureRedirect: "/fuc"
        })
        console.log("what"); // displaying the message but what is happening?
});