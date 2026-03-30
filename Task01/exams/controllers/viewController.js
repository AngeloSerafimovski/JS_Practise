const Course = require("../models/courseModel");

exports.getTestPage = async (req, res) => {
  try {
    res.status(200).render("test");
  } catch (err) {
    res.status(500).send("Nastana Greshka");
  }
};

exports.getWelcomePage = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).render("welcome", {
      title: "Site kuresvi",
      courses,
    });
  } catch (err) {
    res.status(500).send("Nastana Greshka");
  }
};