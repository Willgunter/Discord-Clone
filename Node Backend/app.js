const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const { mongooseSignIn } = require('./db.js');
var testRoute = require('./routes/testroute.js');

const app = express();

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoDB = "mongodb://localhost:27017/DiscordClone";

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}

mongoose.set("strictQuery", false);

// TODO replace string w .env variable
// TODO
// TODO
// TODO
const mongoDBurl = "mongodb+srv://admin:adminpwd@cluster0.0tnfah7.mongodb.net/DiscordClone?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/test', testRoute); // not the problem

module.exports = app;