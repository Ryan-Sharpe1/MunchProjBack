const mongoose = require('mongoose');



const PlayerSchema = mongoose.Schema({



    PlayerName: {
        type: String,
        required: true
    },

    Level: {
        type: Number,
        default: 0
    },

    Head: {
        type: String,
        default: ""
    },

    Chest: {
        type: String,
        default: ""
    },

    oneHand: {
        type: String,
        default: ""
    },

    mainHand: {
        type: String,
        default: ""
    },

    Legs: {
        type: String,
        default: ""
    },

    Feet: {
        type: String,
        default: ""
    },

    timeStamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Players', PlayerSchema);