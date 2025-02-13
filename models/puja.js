const mongoose = require("mongoose");

const pujaSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String  },
    image: { type: String }, // Store image URL
    
  },
);

const Puja = mongoose.model("Puja", pujaSchema);
module.exports = Puja;
