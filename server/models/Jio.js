const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JioSchema = Schema({
    jioLocation: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Location',
        required: true
    },

    jioer: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },

    jioee: {
        type: mongose.Schema.Types.ObjectId, ref: 'User'
    },

    jio_created_date: Date.now,

    jio_Date: {
        type: Date,
        required: true
    },

    jioStatus: {
        type: String,
        enum: ['accepted', 'pending', 'terminated'],
        required: true
    },

    jio_time: {
        jio_start_time: Date,
        jio_end_time: Date,
        required: true
    },

    jio_description: {
        type: String,
        maxLength: 200,
        required: true 
    }
})

const Jio = mongoose.model('Jio', JioSchema)
module.exports = {Jio}