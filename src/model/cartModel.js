const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
    quantity: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const cartModel = mongoose.model('cart', schema)

module.exports = cartModel