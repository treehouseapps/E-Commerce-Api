const multer = require("multer");

const storage = multer.memoryStorage(); // we send file to Cloudinary, not disk

const upload = multer({
  storage,
});

module.exports = upload;
