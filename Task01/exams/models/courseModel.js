const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Kursot mora da ima Ime"],
  },
  address: {
    type: String,
    required: [true, "Kursot mora da ima adresa"],
  },
  area: {
    type: String,
    required: [true, "Kursot mora da ima oblast"],
  },
  academy: {
    type: mongoose.Schema.ObjectId,
    ref: "Academy",
    required: [true, "Kursot mora da e od akademijata"],
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;