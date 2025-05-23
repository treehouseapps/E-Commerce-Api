const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
})

const productModel = mongoose.model('products', schema)

module.exports = productModel