const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JioSchema = Schema({

    jioer: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        // required: true
        //type: "String"
    },

    jioee: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
        //type: "String"
    },

    jio_date_time: {
        formatted: String,
        ISO: String
    },

    jio_duration: {
        type: Number
    },

    jioStatus: {
        type: String,
        enum: ['accepted', 'pending'],
        // required: true
    },

    jio_description: {
        type: String,
        maxLength: 200,
        // required: true 
    },

    header: {
        type: String
    },

    jioLocation: {
        name: String,
        address: String,
        image: String       
    }
})

const Jio = mongoose.model('Jio', JioSchema)
module.exports = {Jio}