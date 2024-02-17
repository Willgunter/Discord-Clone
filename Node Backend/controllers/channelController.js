var { ChannelModel } = require("../models/channel");
var { ServerModel } = require("../models/server");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// => localhost:3000/servers
exports.getchannel = asyncHandler(async (req, res, next) => {
    
    getAllChannels().catch((err) => console.log('Error in get Channel Save :' + JSON.stringify(err, undefined, 2)));
        async function getAllChannels() {
            
            res.send(await ServerModel.find({}, { name: 1, channels: 1, _id: 0 })
                .populate('channels', 'name')
                .sort({ _id: -1 }));
            
        }
});

exports.postchannel = asyncHandler(async (req, res, next) => {
    
    saveChannel().catch((err) => console.log('Error in post Channel Save :' + JSON.stringify(err, undefined, 2)));
    async function saveChannel() {

        const cha = new ChannelModel({
            _id: req.body._id,
            name: req.body.name,
            messages: req.body.messages,
        });

        await cha.save();
        
        res.send(cha);

    }

});