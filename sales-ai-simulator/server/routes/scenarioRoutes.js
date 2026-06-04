const express = require("express");

const scenarioController = require("./../controllers/scenarioController");
const protectMiddleware = require("./../middlewares/protect");

const router = express.Router();

router
  .route("/")
  .get(
    protectMiddleware.protect,
    scenarioController.getAllScenarios
  )
  .post(
    protectMiddleware.protect,
    protectMiddleware.restrictTo("admin"),
    scenarioController.createScenario
  );

router
  .route("/:id")
  .get(
    protectMiddleware.protect,
    scenarioController.getScenario
  )
  .patch(
    protectMiddleware.protect,
    protectMiddleware.restrictTo("admin"),
    scenarioController.updateScenario
  )
  .delete(
    protectMiddleware.protect,
    protectMiddleware.restrictTo("admin"),
    scenarioController.deleteScenario
  );

module.exports = router;