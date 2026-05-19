const express = require('express');

const scenarioController = require("./../controllers/scenarioController");
 
const router = express.Router();

router
    .route("/")
    .get(scenarioController.getAllScenarios)
    .post(scenarioController.createScenario)


router
    .route("/:id")
    .get(scenarioController.getScenario)
    .patch(scenarioController.updateScenario)
    .delete(scenarioController.deleteScenario);





module.exports = router;