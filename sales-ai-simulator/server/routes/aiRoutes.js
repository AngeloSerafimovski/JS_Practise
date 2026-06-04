const express = require("express");

const aiController = require("./../controllers/aiController");
const protectMiddleware = require("./../middlewares/protect");

const router = express.Router();

router.post(
  "/evaluate",
  protectMiddleware.protect,
  aiController.evaluateResponse
);

module.exports = router;