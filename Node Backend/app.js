const express = require('express');
const bodyParser = require('body-parser');

// is used to interact w http (interact w backend I think??)
const cors = require('cors');
const secrets = require('dotenv').config();

const { mongoose } = require('./db.js');

var indexRouter = require('./routes/index.js');
var messagesRouter = require('./routes/messages.js');
var usersRouter = require('./routes/users.js');

const app = express();

// mongoose.set("strictQuery", false);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}),);

// specifies which server to set it to or something
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/', indexRouter); // redirect to messages

app.use('/messages', messagesRouter);

app.use('/users', usersRouter);