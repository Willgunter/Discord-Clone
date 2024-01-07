const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
var { UserModel } = require("../models/user");
const config = require('../config/db');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

        console.log("hi: " + jwt_payload.data._id);

        try {
            user = UserModel.getUserById(jwt_payload.data._id);
        } catch (err) {
            return done(err, false);
        }
        if (user) {
            console.log("success");
            return done(null, user);
        } else {
            return done(null, false);
        }
    }));
}