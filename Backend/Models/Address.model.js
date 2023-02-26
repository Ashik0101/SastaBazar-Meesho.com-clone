const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  phone: { type: Number, required: true },
  pincode: { type: Number, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  area: { type: String, required: true },
  house: { type: String, required: true },
  userID: { type: String, required: true },
  nearby_location: { type: String, required: false },
});

const AddressModel = mongoose.model("address", addressSchema);

module.exports = { AddressModel };
