const express = require("express");
const courseController = require("../controllers/courseController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(authController.protect, courseController.createCourse);

router
  .route("/:id")
  .get(courseController.getCourseById)
  .patch(authController.protect, courseController.updateCourse)
  .delete(authController.protect, courseController.deleteCourse);

module.exports = router;