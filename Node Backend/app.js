const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const secrets = require('dotenv').config();

const { mongoose } = require('./db.js');

var indexRouter = require('./routes/index.js');
var messagesRouter = require('./routes/messages.js');

const app = express();

// const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
// const mongoDB = "mongodb://localhost:27017/DiscordClone";

// main().catch((err) => console.log(err));
// async function main() {
//     await mongoose.connect(mongoKey);
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}),);
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/', indexRouter);

app.use('/messages', messagesRouter);