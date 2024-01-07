const express = require('express');
const passport = require("passport");
const path = require('path');
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require('body-parser');

// is used to interact w http (interact w backend I think??)
const cors = require('cors');
const secrets = require('dotenv').config();

const { mongoose } = require('./config/db.js');

var indexRouter = require('./routes/index.js');
var messagesRouter = require('./routes/messages.js');
var usersRouter = require('./routes/users.js');
var usersAuthRouter = require('./routes/usersauth.js');
const { UserModel } = require('./models/user.js');
const session = require('express-session'); // Import the express-session middleware

const app = express();

// mongoose.set("strictQuery", false);
// Body parser middleware (what does that mean)
app.use(cors({ origin: 'http://localhost:4200' }));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}),);

app.use(session({
    secret: 'secretlol',
    resave: true,
    saveUninitialized: true
}));

// Middleware for Passport functions
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Add the express-session middleware/////////////////

////////////////////////////////////////////////////
app.listen(3000, () => console.log('Server started at port : 3000'));
  
app.use('/', indexRouter); // redirect to messages

app.use('/messages', messagesRouter);

app.use('/users', usersRouter);
  
app.use('/authenticate', usersAuthRouter);
  