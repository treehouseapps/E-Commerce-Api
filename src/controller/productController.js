const productModel = require('../model/productModel')
const mongoose = require("mongoose");

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        if (!name || !description || !price || !category) {
            return res.status(400).json({ msg: "All fields are required" });
        }
        const product = await productModel.create({ name, description, price, category });
        res.status(201).json({ msg: "Product added to cart", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        if (!products.length) {
            return res.status(404).json({ msg: "No products found" });
        }
        res.json({ msg: "Products displayed", products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Invalid product ID" });
        }
        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }
        res.json({ msg: "Product retrieved successfully", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

const searchProducts = async (req, res) => {
    try {
        const { name } = req.body; // Extract the 'name' from the request body

        if (!name) {
            return res.status(400).json({ msg: "Product name is required" });
        }

        // Perform case-insensitive search using a regex
        const products = await productModel.find({ name: { $regex: name, $options: "i" } });

        if (products.length === 0) {
            return res.status(404).json({ msg: "No products found" });
        }

        res.json({ msg: "Products retrieved successfully", products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Invalid product ID" });
        }

        const product = await productModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.json({ msg: "Product updated successfully", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Invalid product ID" });
        }

        const product = await productModel.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.json({ msg: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};


module.exports = { addProduct, searchProducts, getAllProducts, getProduct, updateProduct, deleteProduct } 