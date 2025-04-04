const express = require('express')
const app = express()
const { isAdmin, isUser } = require('../middleware/authMddleware')

const { addProduct, searchProducts, getAllProducts, getProduct, updateProduct, deleteProduct } = require('../controller/productController')

app.post('/products/add', isAdmin, addProduct)
app.post('/products/search', isUser, searchProducts)
app.get('/products/', isUser, getAllProducts)
app.get('/products/:id', isUser, getProduct)
app.put('/products/:id', isAdmin, updateProduct)
app.delete('/products/:id', isAdmin, deleteProduct)

module.exports = app