const express = require('express')
const app = express()

const { isAdmin } = require('../middleware/authMddleware')
const { adminSignup, signUp, login, getUsers } = require('../controller/userController')

app.post('/signup', signUp)
app.post('/login', login)
app.post('/adminSignup', adminSignup)
app.get('/getusers', isAdmin, getUsers)

module.exports = app