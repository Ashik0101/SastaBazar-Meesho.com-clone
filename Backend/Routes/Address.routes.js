const express = require("express");
const { AddressModel } = require("../Models/Address.model");
const addressRouter = express.Router();
addressRouter.use(express.json());

//posting address of the user
addressRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const data = new AddressModel(payload);
    await data.save();
    res.send({ msg: "address saved to db!!!" });
  } catch (err) {
    res.send("Some error while adding the address!!");
    console.log("some error in adding the address!!!", err);
  }
});

//getting the address data
addressRouter.get("/get", async (req, res) => {
  const userID = req.body.userID;
  try {
    const userAddress = await AddressModel.findOne({ userID });
    if (userAddress) {
      res.send({ data: userAddress, isAddressPresent: true });
    } else {
      res.send({
        msg: "No address found for this user!!",
        isAddressPresent: false,
      });
    }
  } catch (err) {
    res.send({ msg: "Some error while getting the address", err: err });
    console.log("some error while getting the address :", err);
  }
});

//patching the address of the user
addressRouter.patch("/edit", async (req, res) => {
  const userID = req.body.userID;
  const payload = req.body;
  try {
    const userAddress = await AddressModel.find({ userID });

    if (userAddress.length) {
      const id = userAddress[0]._id;
      await AddressModel.findByIdAndUpdate({ _id: id }, payload);
      res.send({ msg: `Address Updated !!` });
    } else {
      res.send({ msg: "No address found for update !!" });
    }
  } catch (err) {
    res.send({ msg: "Some error while patching the address" });
    console.log("some error while patching the address:", err);
  }
});
module.exports = { addressRouter };
