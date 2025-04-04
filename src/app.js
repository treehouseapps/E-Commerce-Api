const express = require('express');
const app = express();
require("dotenv").config();
const path = require('path');
const connectDB = require('./config/config')
const authRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up views and EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Use routes
app.use('/', authRoutes);
app.use('/', productRoutes);
app.use('/', cartRoutes)

module.exports = app; 