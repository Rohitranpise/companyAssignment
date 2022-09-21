const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productName: {
        type: String
    },
    CategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
});

const Product = mongoose.model("Product", productSchema)
module.exports = Product;