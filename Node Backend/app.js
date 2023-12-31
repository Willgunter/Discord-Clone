const express = require('express');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require('body-parser');

// is used to interact w http (interact w backend I think??)
const cors = require('cors');
const secrets = require('dotenv').config();

const { mongoose } = require('./db.js');

var indexRouter = require('./routes/index.js');
var messagesRouter = require('./routes/messages.js');
var usersRouter = require('./routes/users.js');
var usersAuthRouter = require('./routes/usersauth.js');
const { UserModel } = require('./models/user.js');

const app = express();

// mongoose.set("strictQuery", false);
// Body parser middleware (what does that mean)
app.use(cors({ origin: 'http://localhost:4200' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}),);

// specifies which server to set it to or something
// (only 4200 can access it I think???)

app.listen(3000, () => console.log('Server started at port : 3000'));

// called when passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/"
//   })     
// passport.use(
//     new LocalStrategy(async (username, password, done) => {
//         console.log("why");
//         try {
//             const user = await UserModel.findOne({ username: username });
//             if (!user) {
//                 return done(null, false, { message: "Incorrect username" });
//             };
//         if (user.password !== password) {
//           return done(null, false, { message: "Incorrect password" });
//         };
//         return done(null, user);
//       } catch(err) {
//           return done(err);
//         };
//     })
//   );
  
app.use(passport.initialize());
  
  app.use('/', indexRouter); // redirect to messages
  
  app.use('/messages', messagesRouter);
  
  app.use('/users', usersRouter);
  
  app.use('/authenticate', usersAuthRouter);
  