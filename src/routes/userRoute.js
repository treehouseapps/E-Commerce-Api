const express = require('express')
const app = express()

const { signup, login } = require('../controller/userController')

app.post('/signup', signup)
app.post('/login', login)
// app.post('/adminSignup', signup)

module.exports = app