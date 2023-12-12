// Connecting to DiscordClone database
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const mongoKey = process.env.MONGO;

// const mongoDB =  "mongodb://localhost/DiscordClone";

main().catch((err) => console.log("Error in DB connection: " + JSON.stringify(err, undefined, 2)));

async function main() {
    await mongoose.connect(mongoKey);
    // db = mongoose.createConnection(mongoKey);
}

module.exports = mongoose;