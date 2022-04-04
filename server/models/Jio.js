const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JioSchema = Schema({

    jio_header: {
        type: String
    },
    jio_description: {
        type: String
    },
    jioerID: {
        type: String
    },
    jio_datetime: {
        type: String,
    },
    jio_duration: {
        type: String
    },

    // location_id: {
    //     type: String,
    //     // required: true
    // },

    // jioer: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'User',
    //     // required: true
    // },

    // jioee: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'User'
    // },

    // // jio_created_date: Date.now,

    // jio_Date: {
    //     type: Date,
    //     // required: true
    // },

    // jioStatus: {
    //     type: String,
    //     enum: ['accepted', 'pending'],
    //     // required: true
    // },

    // jio_time: {
    //     jio_start_time: {
    //         type: Date,
    //         // required: true
    //     },
    //     jio_end_time: {
    //         type: Date,
    //         // required: true
    //     }
    // },

})

const Jio = mongoose.model('Jio', JioSchema)
module.exports = {Jio}