const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Report', reportSchema);