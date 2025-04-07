const express = require('express');
const app = express();
const { isAdmin } = require('../middleware/authMddleware');

const { addProduct, searchProducts, getAllProducts, getProduct, updateProduct, deleteProduct } = require('../controller/productController');

/**
 * @swagger
 * /products/add:
 *   post:
 *     summary: Add a new product (admin only)
 *     description: Admins can add a new product with details like name, description, price, and category.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *               category:
 *                 type: string
 *             required:
 *               - name
 *               - price
 *               - category
 *     responses:
 *       201:
 *         description: Product added successfully
 *       400:
 *         description: Bad request
 *       403:
 *         description: Forbidden, only admins can access this route
 */
app.post('/products/add', isAdmin, addProduct);

/**
 * @swagger
 * /products/search:
 *   post:
 *     summary: Search for products
 *     description: Allows users to search for products by various criteria (e.g., name, category).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               searchTerm:
 *                 type: string
 *               category:
 *                 type: string
 *             required:
 *               - searchTerm
 *     responses:
 *       200:
 *         description: List of products matching search criteria
 *       400:
 *         description: Bad request
 */
app.post('/products/search', searchProducts);

/**
 * @swagger
 * /products/:
 *   get:
 *     summary: View all products
 *     description: Allows users to view all available products.
 *     responses:
 *       200:
 *         description: List of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                     format: float
 *                   category:
 *                     type: string
 *       400:
 *         description: Bad request
 */
app.get('/products/', getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: View a specific product
 *     description: Allows users to view a product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Details of the specified product
 *       404:
 *         description: Product not found
 */
app.get('/products/:id', getProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update an existing product (admin only)
 *     description: Admins can update the details of an existing product (e.g., price, description).
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *               category:
 *                 type: string
 *             required:
 *               - name
 *               - price
 *               - category
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       403:
 *         description: Forbidden, only admins can access this route
 *       404:
 *         description: Product not found
 */
app.put('/products/:id', isAdmin, updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product (admin only)
 *     description: Admins can delete a product from the store by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       403:
 *         description: Forbidden, only admins can access this route
 *       404:
 *         description: Product not found
 */
app.delete('/products/:id', isAdmin, deleteProduct);

module.exports = app;
