// model for messages

const mongoose = require('mongoose');

const mongoDB = "mongodb://localhose:27017/DiscordClone";

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}

// mongoose.connect(mongoDB, (err) => {
//     if (!err)
//         console.log('MongoDB connection succeeded.');
//     else
//         console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
// });

module.exports = mongoose;