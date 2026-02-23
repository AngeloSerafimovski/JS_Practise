const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Actor name is required"],
    },
    age: {
      type: Number,
      min: 0,
    },
    country: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Actor", actorSchema);