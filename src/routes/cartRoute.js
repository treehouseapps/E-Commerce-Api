const express = require('express');
const app = express();
const { isUser } = require('../middleware/authMddleware');
const { addCart, getAllCart, updateCart, deleteCart, cartPayment } = require('../controller/cartController');

/**
 * @swagger
 * /cart/add:
 *   post:
 *     summary: Add a product to the user's cart
 *     description: Allows users to add a product to their cart, with product ID and quantity.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *             required:
 *               - productId
 *               - quantity
 *     responses:
 *       201:
 *         description: Product added to cart
 *       400:
 *         description: Bad request
 *       403:
 *         description: Forbidden, only logged-in users can access this route
 */
app.post('/cart/add', isUser, addCart);

/**
 * @swagger
 * /cart/:
 *   get:
 *     summary: View the user's cart
 *     description: Users can view the contents of their cart, including product details and total price.
 *     responses:
 *       200:
 *         description: Cart items retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   productId:
 *                     type: string
 *                   quantity:
 *                     type: number
 *                   price:
 *                     type: number
 *                     format: float
 *       403:
 *         description: Forbidden, only logged-in users can access this route
 */
app.get('/cart/', isUser, getAllCart);

/**
 * @swagger
 * /cart/{id}:
 *   put:
 *     summary: Update the user's cart
 *     description: Allows users to update the quantity of a specific product in their cart.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the cart item to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: number
 *             required:
 *               - quantity
 *     responses:
 *       200:
 *         description: Cart item updated successfully
 *       403:
 *         description: Forbidden, only logged-in users can access this route
 *       404:
 *         description: Cart item not found
 */
app.put('/cart/:id', isUser, updateCart);

/**
 * @swagger
 * /cart/{id}:
 *   delete:
 *     summary: Remove a product from the user's cart
 *     description: Users can remove a specific product from their cart by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the cart item to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cart item removed successfully
 *       403:
 *         description: Forbidden, only logged-in users can access this route
 *       404:
 *         description: Cart item not found
 */
app.delete('/cart/:id', isUser, deleteCart);

/**
 * @swagger
 * /cart/payment/:
 *   get:
 *     summary: Proceed to payment and simulate the checkout process
 *     description: Users can proceed to the payment process and clear their cart after payment is simulated.
 *     responses:
 *       200:
 *         description: Payment simulated successfully and cart cleared
 *       403:
 *         description: Forbidden, only logged-in users can access this route
 */
app.get('/cart/payment/', isUser, cartPayment);

module.exports = app;
