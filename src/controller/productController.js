const productModel = require('../model/productModel')
const mongoose = require("mongoose");

const products = [
    {
        "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "img": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "description": "Your perfect pack for everyday use and walks in the forest.",
        "price": 109.95,
        "category": "men's clothing",
        "_id": "1",
        "__v": 0
    },
    {
        "name": "Mens Casual Premium Slim Fit T-Shirts",
        "img": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        "price": 22.3,
        "category": "men's clothing",
        "_id": "2",
        "__v": 0
    },
    {
        "name": "Mens Cotton Jacket",
        "img": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
        "price": 55.99,
        "category": "men's clothing",
        "_id": "3",
        "__v": 0
    },
    {
        "name": "Mens Casual Slim Fit",
        "img": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "description": "The color could be slightly different between on the screen and in practice.",
        "price": 15.99,
        "category": "men's clothing",
        "_id": "4",
        "__v": 0
    },
    {
        "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "img": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
        "price": 695,
        "category": "jewelery",
        "_id": "5",
        "__v": 0
    },
    {
        "name": "Solid Gold Petite Micropave",
        "img": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "price": 168,
        "category": "jewelery",
        "_id": "6",
        "__v": 0
    },
    {
        "name": "White Gold Plated Princess",
        "img": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
        "price": 9.99,
        "category": "jewelery",
        "_id": "7",
        "__v": 0
    },
    {
        "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "img": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.",
        "price": 10.99,
        "category": "jewelery",
        "_id": "8",
        "__v": 0
    },
    {
        "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        "img": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance.",
        "price": 64,
        "category": "electronics",
        "_id": "9",
        "__v": 0
    },
    {
        "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "img": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "description": "Easy upgrade for faster boot up, shutdown, application load and response.",
        "price": 109,
        "category": "electronics",
        "_id": "10",
        "__v": 0
    },
    {
        "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "img": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "description": "3D NAND flash are applied to deliver high transfer speeds.",
        "price": 109,
        "category": "electronics",
        "_id": "11",
        "__v": 0
    },
    {
        "name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "img": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "description": "Expand your PS4 gaming experience with sleek design and high capacity.",
        "price": 114,
        "category": "electronics",
        "_id": "12",
        "__v": 0
    },
    {
        "name": "Acer SB220Q bi 21.5 inches Full HD IPS Ultra-Thin",
        "img": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "description": "21.5 inches Full HD widescreen IPS display with Radeon Free Sync technology.",
        "price": 599,
        "category": "electronics",
        "_id": "13",
        "__v": 0
    },
    {
        "name": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
        "img": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "description": "49 inch Super Ultrawide 32:9 curved gaming monitor with Quantum Dot technology.",
        "price": 999.99,
        "category": "electronics",
        "_id": "14",
        "__v": 0
    },
    {
        "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "img": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "description": "100% Polyester; detachable liner fabric; adjustable cuffs and detachable hood.",
        "price": 56.99,
        "category": "women's clothing",
        "_id": "15",
        "__v": 0
    },
    {
        "name": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "img": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "description": "Faux leather material for style and comfort. 2 pockets at the front.",
        "price": 29.95,
        "category": "women's clothing",
        "_id": "16",
        "__v": 0
    },
    {
        "name": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "img": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "description": "Lightweight with hood and adjustable drawstring waist design. Button and zipper front closure.",
        "price": 39.99,
        "category": "women's clothing",
        "_id": "17",
        "__v": 0
    },
    {
        "name": "MBJ Women's Solid Short Sleeve Boat Neck V",
        "img": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "description": "95% Rayon, 5% Spandex, lightweight fabric with great stretch for comfort.",
        "price": 9.85,
        "category": "women's clothing",
        "_id": "18",
        "__v": 0
    },
    {
        "name": "Opna Women's Short Sleeve Moisture",
        "img": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "description": "Lightweight, roomy, highly breathable with moisture-wicking fabric.",
        "price": 7.95,
        "category": "women's clothing",
        "_id": "19",
        "__v": 0
    },
    {
        "name": "DANVOUY Womens T Shirt Casual Cotton Short",
        "img": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "description": "Casual, short sleeve, letter print, v-neck, fashion tees.",
        "price": 12.99,
        "category": "women's clothing",
        "_id": "20",
        "__v": 0
    }
]

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        if (!name || !description || !price || !category) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const inserting = await productModel.insertMany(products);
        // const product = await productModel.create({ name, img, description, price, category });
        res.status(201).json({ message: "Product added to cart", inserting });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        if (!products.length) {
            return res.status(404).json({ message: "No products found" });
        }
        res.json({ message: "Products displayed", products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }
        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product retrieved successfully", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const searchProducts = async (req, res) => {
    try {
        const { name } = req.body; // Extract the 'name' from the request body

        if (!name) {
            return res.status(400).json({ message: "Product name is required" });
        }

        // Perform case-insensitive search using a regex
        const products = await productModel.find({ name: { $regex: name, $options: "i" } });

        if (products.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }

        res.json({ message: "Products retrieved successfully", products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        const product = await productModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product updated successfully", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        const product = await productModel.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


module.exports = { addProduct, searchProducts, getAllProducts, getProduct, updateProduct, deleteProduct } 