const express = require('express')
const app = express()
const { isUser } = require('../middleware/authMddleware')
const { addCart, getAllCart, updateCart, deleteCart } = require('../controller/cartController')

app.post('/cart/add', isUser, addCart)
app.get('/cart/', isUser, getAllCart)
app.put('/cart/:id', isUser, updateCart)
app.delete('/cart/:id', isUser, deleteCart)

module.exports = app