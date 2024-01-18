const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ServerSchema = new Schema({
    name: {type : String, required: true},
    channels: {type : Array, required: true},
    // user: { type: Schema.Types.ObjectId, ref: "UserModel" }, // Reference to the User model
});

const ServerModel = mongoose.model("ServerModel", ServerSchema, "servers");

module.exports.getServerByName = function(name) {} // eventually

module.exports.addServer = async function(newServer, callback) { // callback is not in function args but we can still use if for some reason

    try {
        
        await newServer.save(callback);

    } catch (error) {
        throw error;
    }

    console.log("Server: " + newServer.name + " added to database");
    
}


module.exports = { ServerModel };
