const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = Schema({

    googleid: {
        type: String,
        required: true,
        unique: true
    },
     
    name: {
        type: String
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

    openingHours: {
        type: String
    }
})

const Location = mongoose.model('Location', LocationSchema)
module.exports = {Location}
