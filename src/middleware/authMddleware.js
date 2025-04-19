const jwt = require("jsonwebtoken");
require("dotenv").config();

const isUser = (req, res, next) => {
    const token = req.header("Authorization");
    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: "Access Denied! No token provided." });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded;

        if (req.user.role === 'user') {
            next();
        } else {
            return res.status(403).json({ message: "Access Denied! User role required." });
        }
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};
const isAdmin = (req, res, next) => {
    const token = req.header("Authorization");
    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: "Access Denied! No token provided." });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded;

        if (req.user.role === 'admin') {
            next();
        } else {
            return res.status(403).json({ message: "Access Denied! User role required." });
        }
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
}
module.exports = { isAdmin, isUser };