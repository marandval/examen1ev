const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    director: {
        required: true,
        type: String
    },
    
})

module.exports = mongoose.model('equipo', dataSchema)