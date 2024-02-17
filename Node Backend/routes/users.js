const express = require("express");
const router = express.Router();
const passport = require("passport");

const user_controller = require("../controllers/userController");

/// USER ROUTES ///

// register
router.post('/register', user_controller.register);

// authenticate
router.post('/authenticate', user_controller.authenticate);

// protected route
router.get('/profile', passport.authenticate('jwt', {session:false}), user_controller.profile);

router.get('/validate', user_controller.validate);

router.get('/users', user_controller.index);

router.put('/users', user_controller.changecolor);

module.exports = router;