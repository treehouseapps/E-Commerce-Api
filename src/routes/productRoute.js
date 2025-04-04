const express = require('express')
const app = express()
const { isAdmin } = require('../middleware/authMddleware')

const { addProduct, searchProducts, getAllProducts, getProduct, updateProduct, deleteProduct } = require('../controller/productController')

app.post('/products/add', isAdmin, addProduct)
app.post('/products/search', searchProducts)
app.get('/products/', getAllProducts)
app.get('/products/:id', getProduct)
app.put('/products/:id', isAdmin, updateProduct)
app.delete('/products/:id', isAdmin, deleteProduct)

module.exports = app