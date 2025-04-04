const cartModel = require('../model/cartModel');
const mongoose = require("mongoose");

// Add product to the cart
const addCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user.userId;

        if (!productId || !quantity) {
            return res.status(400).json({ msg: "Product ID and quantity are required" });
        }

        const qty = parseInt(quantity);

        const existingItem = await cartModel.findOne({ userId, productId });

        if (existingItem) {
            const newQuantity = existingItem.quantity + qty;

            const updatedItem = await cartModel.findOneAndUpdate(
                { userId, productId },
                { $set: { quantity: newQuantity } },
                { new: true }
            );

            return res.status(200).json({ msg: "Cart updated", cart: updatedItem });
        } else {
            const cartItem = await cartModel.create({
                userId,
                productId,
                quantity: qty,
                createdAt: new Date(),
            });

            return res.status(201).json({ msg: "Product added to cart", cartItem });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

// Get all products in the user's cart
const getAllCart = async (req, res) => {
    try {
        const userId = req.user.userId

        const products = await cartModel.find({ userId });
        if (!products.length) {
            return res.status(404).json({ msg: "No products found in cart" });
        }
        res.json({ msg: "Products in cart", products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

// Update a cart item for the user
const updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const quantity = req.body;
        const userId = req.user.userId

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Invalid product ID" });
        }
        if (!quantity) {
            return res.status(400).json({ msg: "Quantity is required" });
        }
        // Find and update the cart item, ensuring it belongs to the user
        const product = await cartModel.findOneAndUpdate(
            { _id: id, userId },
            quantity,
            { new: true }
        );

        if (!product) {
            return res.status(404).json({ msg: "Product not found in cart" });
        }

        res.json({ msg: "Product updated successfully", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

// Delete a cart item for the user
const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.userId

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Invalid product ID" });
        }

        const product = await cartModel.findOneAndDelete({ _id: id, userId });
        if (!product) {
            return res.status(404).json({ msg: "Product not found in cart" });
        }

        res.json({ msg: "Product deleted from cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};
// Calculate total payment price for the user
const cartPayment = async (req, res) => {
    try {
        const userId = req.user.userId; // Get the user ID from the authenticated user
        const cartItems = await cartModel.find({ userId }).populate('productId'); // Populate product details
        if (cartItems.length === 0) {
            return res.status(404).json({ msg: "Your cart is empty." });
        }

        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.quantity * item.productId.price;
        });

        await cartModel.deleteMany({ userId })
        // Proceed to payment simulation
        res.json({ msg: "Checkout successful. Total price: $ " + totalPrice, totalPrice });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
}
module.exports = { addCart, getAllCart, updateCart, deleteCart, cartPayment };
