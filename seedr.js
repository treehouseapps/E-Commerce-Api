const mongoose = require("mongoose");
const Product = require("./src/model/productModel");
require("dotenv").config();
const connectDB = require("./src/config/config");

connectDB();

  const products = [
  {
    name: "Laptop Pro X",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "A high-performance laptop built for developers, designers, and multitasking professionals.",
    price: 1500,
    category: "Electronics",
  },

  {
    name: "Wireless Mouse",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "A smooth and responsive wireless mouse designed for comfortable daily use.",
    price: 35,
    category: "Electronics",
  },

  {
    name: "Mechanical Keyboard",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "RGB mechanical keyboard with tactile switches and fast gaming response.",
    price: 90,
    category: "Electronics",
  },

  {
    name: "Gaming Headset",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Immersive surround sound gaming headset with a built-in noise-canceling microphone.",
    price: 75,
    category: "Electronics",
  },

  {
    name: "Smart Watch",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Modern smartwatch with fitness tracking, notifications, and heart-rate monitoring.",
    price: 120,
    category: "Electronics",
  },

  {
    name: "Black Hoodie",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Comfortable black hoodie made from premium soft cotton for casual everyday wear.",
    price: 55,
    category: "Fashion",
  },

  {
    name: "White Sneakers",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Stylish white sneakers designed for comfort, flexibility, and daily fashion.",
    price: 80,
    category: "Fashion",
  },

  {
    name: "Blue Jeans",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Slim-fit blue jeans with a modern look and durable denim material.",
    price: 60,
    category: "Fashion",
  },

  {
    name: "Leather Jacket",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Premium leather jacket offering a bold and timeless streetwear style.",
    price: 180,
    category: "Fashion",
  },

  {
    name: "Classic T-Shirt",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Soft cotton t-shirt with a clean minimal design for everyday comfort.",
    price: 25,
    category: "Fashion",
  },

  {
    name: "Office Chair",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Ergonomic office chair designed to provide comfort during long work sessions.",
    price: 210,
    category: "Furniture",
  },

  {
    name: "Wooden Desk",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Modern wooden desk with a spacious surface for productivity and organization.",
    price: 320,
    category: "Furniture",
  },

  {
    name: "Bookshelf",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Minimal bookshelf perfect for organizing books, decor items, and office supplies.",
    price: 140,
    category: "Furniture",
  },

  {
    name: "Table Lamp",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Elegant LED table lamp with warm lighting for study and bedroom spaces.",
    price: 45,
    category: "Furniture",
  },

  {
    name: "Coffee Table",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Modern coffee table designed to enhance living room aesthetics and functionality.",
    price: 160,
    category: "Furniture",
  },

  {
    name: "Basketball",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Professional-quality basketball suitable for both indoor and outdoor courts.",
    price: 30,
    category: "Sports",
  },

  {
    name: "Football Boots",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Comfortable football boots designed for speed, grip, and performance on the field.",
    price: 95,
    category: "Sports",
  },

  {
    name: "Yoga Mat",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Non-slip yoga mat offering support and comfort during workouts and stretching.",
    price: 40,
    category: "Sports",
  },

  {
    name: "Dumbbell Set",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Adjustable dumbbell set ideal for strength training and home fitness routines.",
    price: 220,
    category: "Sports",
  },

  {
    name: "Running Shorts",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Lightweight and breathable running shorts designed for active performance.",
    price: 28,
    category: "Sports",
  },

  {
    name: "Perfume Classic",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Fresh and long-lasting perfume with a clean and elegant daily fragrance.",
    price: 70,
    category: "Beauty",
  },

  {
    name: "Face Cleanser",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Gentle facial cleanser that removes dirt and keeps skin refreshed and hydrated.",
    price: 18,
    category: "Beauty",
  },

  {
    name: "Hair Dryer",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Fast-drying hair dryer with multiple heat settings for everyday styling.",
    price: 65,
    category: "Beauty",
  },

  {
    name: "Lipstick Set",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Matte lipstick collection featuring vibrant colors and smooth texture.",
    price: 50,
    category: "Beauty",
  },

  {
    name: "Skin Care Kit",
    img: "https://res.cloudinary.com/dr86lfgv0/image/upload/v1777128146/products/bq8e9qsxqrjgtiupgqfx.jpg",
    description: "Complete skincare package designed to nourish, hydrate, and protect the skin.",
    price: 95,
    category: "Beauty",
  },
];
const seed = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products inserted");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
seed();
