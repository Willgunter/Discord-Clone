const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
var { UserModel } = require("../models/user");
const config = require('../config/db');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        
        try {
            // Note, ran into circular structure problem when 
            // not using async / await
            user = await UserModel.getUserById(jwt_payload.data._id);
        } catch (err) {
            return done(err, false);
        }
        
        if(user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }));

}