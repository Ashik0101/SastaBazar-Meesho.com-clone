const express = require("express");
const { ProductModel } = require("../Models/Products.model");
const sareeRouter = express.Router();
sareeRouter.use(express.json());

//getting saree on load event
sareeRouter.get("/saree", async (req, res) => {
  let obj = { category: "saree" };
  let price = req.query.price;
  let rating = req.query.rating;
  if (price) {
    obj = { category: "saree", price: { $gte: `${price}` } };
  }
  if (rating) {
    obj = { category: "saree", rating: { $gte: `${rating}` } };
  }

  try {
    const data = await ProductModel.find(obj).limit(15);
    res.send(data);
  } catch (err) {
    res.send({ msg: "Some error from saree route on load event" });
    console.log("some error from saree get method on load event :", err);
  }
});

//applying pagination on saree
sareeRouter.get("/saree/pagination", async (req, res) => {
  let { page } = req.query;
  console.log(req.query);
  let limitCount = 15;
  try {
    const data = await ProductModel.find({ category: "saree" })
      .skip((page - 1) * limitCount)
      .limit(limitCount);
    res.send(data);
  } catch (err) {
    res.send({
      msg: "some error in getting the saree data while pagination",
      err: err.msg,
    });
    console.log(
      "Some Error occurred while applying pagination on saree data:",
      err
    );
  }
});

module.exports = { sareeRouter };
