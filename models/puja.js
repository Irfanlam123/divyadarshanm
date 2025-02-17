const mongoose = require("mongoose");

const pujaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }, // Store image URL
    price: { type: Number, required: true },
    location: { type: String, required: true }, // New field for location
    date: { type: Date, required: true }, // New field for date
  },
  { timestamps: true }
);

const Puja = mongoose.model("Puja", pujaSchema);
module.exports = Puja;
