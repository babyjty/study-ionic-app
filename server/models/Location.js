const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = Schema({
     
    name: {
        String
    },

    address: {
        type: String
    },

    image: {
        type: String
    },
    
    rating: {
        type: Number
    },

    googleid: {
        type: String,
        required: true,
        unique: true
    }
})

const Location = mongoose.model('Location', LocationSchema)
module.exports = {Location}
