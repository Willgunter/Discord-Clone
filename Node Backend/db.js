// Connecting to DiscordClone database

const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const mongoDB = "mongodb://localhost:27017/DiscordClone";

main().catch((err) => console.log("Error in DB connection: " + JSON.stringify(err, undefined, 2)));
async function main() {
    await mongoose.connect(mongoDB);
}

module.exports = mongoose;