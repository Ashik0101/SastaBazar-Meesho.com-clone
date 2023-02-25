const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { ProductModel } = require("./Models/Products.model");
const { productRouter } = require("./Routes/Product.routes");
const { sareeRouter } = require("./Routes/Saree.routes");
let { userRouter } = require("./Routes/User.routes");
const app = express();
app.use(express.json());
app.use(cors());
//product router is here
app.use("/product", productRouter);
app.use("/product", sareeRouter);
app.use("/user", userRouter);
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("<><><><><> Connected to db <><><><><>");
    console.log(`<><><>Server is running port ${process.env.PORT}<><><>`);
  } catch (err) {
    console.log("Some error connecting to db!", err);
  }
});
