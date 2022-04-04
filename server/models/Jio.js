const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JioSchema = Schema({
    jioer: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        // required: true
        //type: "String"
    },
    jioLocation: {
        type: String,
        unique: false
    },

    jioAddress: {
        type: String
    },

    openingHours: {
        type: String
    },

    closingHours: {
        type: String
    },

    cost: {
        type: Number
    },

    jioee: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
        //type: "String"
    },

    // jio_created_date: Date.now,

    jio_date_time: {
        type: String,
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

    location_id: {
        type: String,
        // required: true
    },

    header: {
        type: String
    }
})

const Jio = mongoose.model('Jio', JioSchema)
module.exports = {Jio}