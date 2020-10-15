const mongoose = require('mongoose');

const MunchkinSchema = mongoose.Schema({

    PlayerName : {
        type:String,
        required: true
    },
     Level: {
        type: Number,
        default: 0
    },
    timeStamp : {
        type:Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Players',MunchkinSchema);