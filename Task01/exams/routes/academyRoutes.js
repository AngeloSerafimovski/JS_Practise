const express = require("express");
const academyController = require("../controllers/academyController");

const router = express.Router();

router
  .route("/")
  .get(academyController.getAllAcademies)
  .post(academyController.createAcademy);

router
  .route("/:id")
  .get(academyController.getAcademyById)
  .patch(academyController.updateAcademy)
  .delete(academyController.deleteAcademy);

module.exports = router;