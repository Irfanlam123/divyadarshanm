const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Add unique constraint
    phone: { type: String, required: true, unique: true }, // Phone as string, also unique
    password: { type: String, required: true }, // Password as string
  },
  { timestamps: true } // This will add createdAt and updatedAt fields automatically
);

const User = mongoose.model("User", userSchema);
module.exports = User;
