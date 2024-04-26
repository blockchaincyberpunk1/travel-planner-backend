const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Plan', planSchema);
