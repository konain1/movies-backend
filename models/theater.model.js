const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
        lowercase:true,
        trim:true
    },
    pincode: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true });

const theaterModel = mongoose.model('theater', theaterSchema);

module.exports = theaterModel;
