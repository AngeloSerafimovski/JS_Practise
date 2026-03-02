const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    destination: { type: String, required: [true, "Destination is required"] },
    days: { type: Number, min: 1, required: [true, "Days is required"] },
    price: { type: Number, min: 0, required: [true, "Price is required"] },
    seatsAvailable: { type: Number, min: 0, default: 0 },
    startDate: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tour", tourSchema);