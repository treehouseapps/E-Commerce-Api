const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require('../model/userModel')

// const form = (req, res) => {
//     try {
//         res.render("form");
//     } catch (err) {
//         console.log('error : ' + err)
//         res.send('error : ' + err)
//     }
// }
// const loginpage = (req, res) => {
//     try {
//         res.render("login");
//     } catch (err) {
//         console.log('error : ' + err)
//         res.send('error : ' + err)
//     }
// }
const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already registered' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({ name, email, password: hashedPassword, role });
        if (newUser) {
            const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.status(201).json({ msg: "User created", token });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
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

module.exports = { signup, login } 