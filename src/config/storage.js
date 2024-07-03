const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "..", "public/pdf"));
  },
  filename: function (req, file, cb) {
    const extArray = file.mimetype.split("/");
    const extension = extArray[extArray.length - 1];
    cb(null, `${req.body.filename}.${extension}`);
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
