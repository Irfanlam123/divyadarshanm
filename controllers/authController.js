
const User = require("../models/User");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    // Check if all fields are provided
    if (!name || !phone || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check for existing user with email OR phone
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({
        error:
          existingUser.email === email
            ? "User with this email already exists"
            : "User with this phone number already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name: name.trim(),
      phone: phone.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { signup };

