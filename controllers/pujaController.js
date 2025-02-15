const Puja = require("../models/puja");

// ✅ Get all Pujas
exports.getAllPujas = async (req, res) => {
  try {
    const pujas = await Puja.find();
    res.json(pujas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get a single Puja by ID
exports.getPujaById = async (req, res) => {
  try {
    const puja = await Puja.findById(req.params.id);
    if (!puja) return res.status(404).json({ message: "Puja not found" });
    res.json(puja);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Create a new Puja
exports.createPuja = async (req, res) => {
  try {
    const { name, description, image, price } = req.body;
    const newPuja = new Puja({ name, description, image, price });
    await newPuja.save();
    res.status(201).json(newPuja);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Update Puja
exports.updatePuja = async (req, res) => {
  try {
    const updatedPuja = await Puja.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPuja)
      return res.status(404).json({ message: "Puja not found" });
    res.json(updatedPuja);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Delete Puja
exports.deletePuja = async (req, res) => {
  try {
    const deletedPuja = await Puja.findByIdAndDelete(req.params.id);
    if (!deletedPuja)
      return res.status(404).json({ message: "Puja not found" });
    res.json({ message: "Puja deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
