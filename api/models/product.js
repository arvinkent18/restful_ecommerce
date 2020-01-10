const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: { createdAt: 'created_at' } });

productSchema.index({
    name: 'text',
    description: 'text'}, 
    {
        weights: {
            name: 5,
            description: 1,
        },
    }
);

module.exports = mongoose.model('Product', productSchema);