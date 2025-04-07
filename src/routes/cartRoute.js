const express = require('express');
const router = express.Router();
const { addCart, getAllCart, updateCart, deleteCart, cartPayment } = require('../controllers/cartController');

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Add product to cart
 *     description: Add a product to the user's cart.
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - quantity
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Product added to cart successfully
 *       400:
 *         description: Missing product ID or quantity
 */
router.post('/', addCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Get all products in the cart
 *     description: Retrieve all products added to the user's cart.
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: List of products in the cart
 *       404:
 *         description: No products found in the cart
 */
router.get('/', getAllCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     summary: Update cart item quantity
 *     description: Update the quantity of a product in the user's cart.
 *     tags: [Cart]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Cart item ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *             properties:
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cart item updated successfully
 *       400:
 *         description: Invalid cart item ID or missing quantity
 *       404:
 *         description: Cart item not found
 */
router.put('/:id', updateCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: Remove product from cart
 *     description: Remove a product from the user's cart by its ID.
 *     tags: [Cart]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Cart item ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product removed from cart successfully
 *       400:
 *         description: Invalid cart item ID
 *       404:
 *         description: Cart item not found
 */
router.delete('/:id', deleteCart);

/**
 * @swagger
 * /api/cart/payment:
 *   post:
 *     summary: Checkout and calculate total price
 *     description: Calculate the total price for the items in the user's cart and simulate a payment.
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: Checkout successful, total price calculated
 *       404:
 *         description: Cart is empty
 */
router.post('/payment', cartPayment);

module.exports = router;
