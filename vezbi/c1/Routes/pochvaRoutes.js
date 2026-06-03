const express = require("express");

const router = express.Router();

const pochvaController = require("../Controllers/pochvaController");

router.post("/", pochvaController.createPochva);
router.get("/", pochvaController.getAllPochvi);

router.post("/sample", pochvaController.addSamplePochvi);

router.get("/:id", pochvaController.getPochvaById);
router.patch("/:id", pochvaController.updatePochva);
router.delete("/:id", pochvaController.deletePochva);

module.exports = router;