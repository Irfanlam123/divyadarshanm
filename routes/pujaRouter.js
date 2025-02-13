const express = require("express");
const router = express.Router();
const pujaController = require("../controllers/pujaController");

router.get("/", pujaController.getAllPujas);
router.get("/:id", pujaController.getPujaById);
router.post("/", pujaController.createPuja);
router.put("/:id", pujaController.updatePuja);
router.delete("/:id", pujaController.deletePuja);

module.exports = router;
