const express = require("express");
const { ProductModel } = require("../Models/Products.model");
const productRouter = express.Router();
productRouter.use(express.json());

//getting with category
productRouter.get("/", async (req, res) => {
  let query = req.query;
  let limit = Infinity;
  let skipCount = 0;
  try {
    const data = await ProductModel.find(query).limit(15);
    res.send(data);
  } catch (err) {
    res.send({
      msg: "some error in getting the data with category :",
      err: err.msg,
    });
    console.log("Some Error occurred in getting the data :", err);
  }
});

//applying pagination
productRouter.get("/pagination", async (req, res) => {
  let { page } = req.query;
  console.log(req.query);
  let limitCount = 15;
  try {
    const data = await ProductModel.find()
      .skip((page - 1) * limitCount)
      .limit(limitCount);
    res.send(data);
  } catch (err) {
    res.send({
      msg: "some error in getting the data while pagination",
      err: err.msg,
    });
    console.log("Some Error occurred while applying pagination :", err);
  }
});

//getting with price condition
productRouter.get("/price", async (req, res) => {
  let { price, rating, page } = req.query;
  let obj;
  if (price) {
    obj = { price: { $gte: `${price}` } };
  }
  if (rating) {
    obj = { rating: { $gte: `${rating}` } };
  }

  try {
    const data = await ProductModel.find(obj);
    res.send(data);
  } catch (err) {
    res.send({
      msg: "Some Error in Getting the data",
      err,
    });
    console.log("Some error in getting the data :", err);
  }
});
module.exports = { productRouter };
