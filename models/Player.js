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
        default: "Missing"
    },

    Chest: {
        type: String,
        default: "Missing"
    },

    oneHand: {
        type: String,
        default: "Missing"
    },

    mainHand: {
        type: String,
        default: "Missing"
    },

    Legs: {
        type: String,
        default: "Missing"
    },

    Feet: {
        type: String,
        default: "Missing"
    },

    timeStamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Players', PlayerSchema);