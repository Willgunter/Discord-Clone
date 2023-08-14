const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const secrets = require('dotenv').config();

const mongoKey = process.env.MONGO;

// const { mongooseSignIn } = require('./db.js');
var testRoute = require('./routes/testroute.js');

const app = express();

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoDB = "mongodb://localhost:27017/DiscordClone";

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoKey);
}

mongoose.set("strictQuery", false);

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/test', testRoute); // not the problem

module.exports = app;