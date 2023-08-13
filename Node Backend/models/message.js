const mongoose = require("mongoose");

var MessageSchema = mongoose.model('Message', {
    text: { type: String },
})

module.exports = { MessageSchema };