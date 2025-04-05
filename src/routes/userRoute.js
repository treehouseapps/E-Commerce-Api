const express = require('express')
const app = express()

const { adminSignup, signUp, login } = require('../controller/userController')

app.post('/signup', signUp)
app.post('/login', login)
app.post('/adminSignup', adminSignup)

module.exports = app