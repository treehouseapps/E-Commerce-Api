const express = require('express');
const app = express();
require("dotenv").config();
const path = require('path');
const connectDB = require('./config/config')
const authRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up views and EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Swagger definition
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'E-Commerce API',
            version: '1.0.0',
            description: 'A simple Express API for E-Commerce with Swagger documentation <a href="https://e-commerce-api-f9qb.onrender.com/">e-commerce-api-f9qb.onrender.com </a>',
        },
    },
    apis: ['./src/routes/*.js'], // Path to the route files where Swagger comments are present
};

// Swagger docs setup
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use routes
app.use('/', authRoutes);
app.use('/', productRoutes);
app.use('/', cartRoutes)

module.exports = app; 