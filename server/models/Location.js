const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = Schema({
    name: String,
    location: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            default: [0,0],
            required: true
        }    
    },
    address : {
        type: String,
        maxLength: 100
    },
    ratings: {
        upvote: [Number],
        downvote: [Number],
    }
})

const Location = mongoose.model('Location', userSchema)
module.exports = {Location}