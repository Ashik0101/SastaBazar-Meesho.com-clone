const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  image: String,
  category: String,
  delievery: String,
  review: String,
  rating: Number,
});

const ProductModel = mongoose.model("ecommerce", productSchema);

module.exports = { ProductModel };
