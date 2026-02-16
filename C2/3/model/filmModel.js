const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  naslov: {
    type: String,
    required: [true, "Mora da ima naslov"],
  },
  tekst: {
    type: String,
    required: [true, "Mora da ima tekst"],
  },
  ocenka: {
    type: Number,
    default: 3,
  },
  avtor: {
    type: String,
  },
  zanr: {
    type: String,
  },
  vreme: {
    type: Date,
    default: Date.now,
  },
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;