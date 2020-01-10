const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quanity: {
        type: Number,
        default: 1
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Cart', cartSchema);