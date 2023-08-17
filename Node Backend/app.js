const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const secrets = require('dotenv').config();

const mongoKey = process.env.MONGO;

const { mongooseSignIn } = require('./db.js');
var indexRouter = require('./routes/index.js');
var messagesRouter = require('./routes/messages.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}),);
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/', indexRouter);

app.use('/messages', messagesRouter);