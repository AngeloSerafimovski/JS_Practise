const mongoose = require("mongoose");

const academySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Akademijata mora da ima Ime"],
  },
  address: {
    type: String,
    required: [true, "Akademijata mora da ima adresa"],
  },
});

const Academy = mongoose.model("Academy", academySchema);

module.exports = Academy;