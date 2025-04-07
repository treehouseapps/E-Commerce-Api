const express = require('express');
const app = express.Router();
const { addProduct, searchProducts, getAllProducts, getProduct, updateProduct, deleteProduct } = require('../controller/productController');
const { isAdmin } = require('../middleware/authMddleware')
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Add a new product
 *     description: Add a new product to the inventory.
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *               - category
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
 *     responses:
 *       201:
 *         description: Product added successfully
 *       400:
 *         description: Missing required fields
 */
app.post('/products/add', isAdmin, addProduct)

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     description: Retrieve all products from the inventory.
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of all products
 *       404:
 *         description: No products found
 */
app.get('/products/', getAllProducts)

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a single product by ID
 *     description: Retrieve product details by its unique ID.
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product retrieved successfully
 *       400:
 *         description: Invalid product ID
 *       404:
 *         description: Product not found
 */
app.get('/products/:id', getProduct)

/**
 * @swagger
 * /api/products/search:
 *   post:
 *     summary: Search products by name
 *     description: Perform a case-insensitive search for products by name.
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: List of products matching the search term
 *       400:
 *         description: Product name is required
 *       404:
 *         description: No products found
 */
app.post('/products/search', searchProducts)

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product
 *     description: Update product details by its unique ID.
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Product ID
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
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Invalid product ID or missing data
 *       404:
 *         description: Product not found
 */
app.put('/products/:id', isAdmin, updateProduct)

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     description: Delete a product from the inventory by its unique ID.
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       400:
 *         description: Invalid product ID
 *       404:
 *         description: Product not found
 */
app.delete('/products/:id', isAdmin, deleteProduct)

module.exports = app;
