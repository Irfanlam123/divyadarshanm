const mongoose = require("mongoose");

const pujaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, // Store image URL
    
  },
  { timestamps: true }
);

const Puja = mongoose.model("Puja", pujaSchema);
module.exports = Puja;
