const express = require("express");
const viewController = require("../controllers/viewController");

const router = express.Router();

router.get("/test", viewController.getTestPage);
router.get("/welcome", viewController.getWelcomePage);

module.exports = router;