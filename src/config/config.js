const mongoose = require("mongoose");

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DBCONNECTION);
        console.log("Database Connected ...");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}
module.exports = connectDB;