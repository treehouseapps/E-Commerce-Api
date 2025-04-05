const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require('../model/userModel')

// Admin signup logic
const adminSignup = async (req, res) => {
    try {
        const { name, email, password, secret } = req.body;
        if (!name || !email || !password || !secret) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (secret !== process.env.ADMIN_SECRET) {
            return res.status(403).json({ message: "Invalid secret code" });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await userModel.create({
            name,
            email,
            password: hashedPassword,
            role: 'admin'
        });

        const token = jwt.sign({ userId: newAdmin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({
            message: "Admin created successfully",
            token,
            user: {
                id: newAdmin._id,
                name: newAdmin.name,
                email: newAdmin.email,
                role: newAdmin.role
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            name: name.trim(),
            email: email.trim(),
            password: hashedPassword,
            role: 'user'
        });
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({
            message: "User created",
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) return res.status(400).json({ msg: "User Not Existed" });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Password is Not Match" });

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ msg: "Login successful", token });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find({ role: { $ne: 'admin' } }).select('-password');

        res.status(200).json({
            message: "Users retrieved successfully",
            users
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
module.exports = { adminSignup, signUp, login, getUsers } 