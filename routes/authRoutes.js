
const express = require("express");
const { signup } = require("../controllers/authController");

const router = express.Router();

// Signup Route
router.post("/signup", signup);

// Export the router
module.exports = router;
