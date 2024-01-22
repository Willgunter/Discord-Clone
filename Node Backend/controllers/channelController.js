var { ChannelModel } = require("../models/channel");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// => localhost:3000/servers
exports.getchannel = asyncHandler(async (req, res, next) => {
    
    saveChannel().catch((err) => console.log('Error in get Channel Save :' + JSON.stringify(err, undefined, 2)));
        async function saveChannel() {
            
            res.send(await ChannelModel.find({}, { name:1, _id:0}).sort({_id:-1}));
            
        }
                
    // where we get all the messages from mongo + send all the messages to the backend (*very important*)

    // NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

});

exports.postchannel = asyncHandler(async (req, res, next) => {
    
    saveChannel().catch((err) => console.log('Error in post Channel Save :' + JSON.stringify(err, undefined, 2)));
    async function saveChannel() {

        // why is this not working?
        const cha = new ChannelModel({
            _id: req.body._id,
            name: req.body.name,
            messages: req.body.messages,
        });

        await cha.save();
        
        // vvv what does this even do lmao vvv
        res.send(cha);

    }

});