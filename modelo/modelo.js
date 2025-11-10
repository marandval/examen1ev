const mongoose = require('mongoose');
/*nuevo commit*/
const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    position: {
        required: true,
        type: String
    },
    injured: {
        required: false,
        type: Boolean
    }
})

module.exports = mongoose.model('jugador', dataSchema)
