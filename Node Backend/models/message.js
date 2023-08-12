const mongoose = require("mongoose");

const Model = mongoose.Schema;

const MessageSchema = new Model ({
    text: { type: String },
})

module.exports = { MessageSchema };