const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Seller', sellerSchema);