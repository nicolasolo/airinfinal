const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Prova2Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        require: true
    }
});

module.exports = Prova2 = mongoose.model('prova2', Prova2Schema);