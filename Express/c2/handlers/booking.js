const Booking = require("../pkg/bookings/bookingSchema");

exports.getAll = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user").populate("tour");
    res.status(200).json({ status: "success", data: { bookings } });
  } catch (err) {
    res.status(501).json({ status: "fail", message: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("user").populate("tour");
    res.status(200).json({ status: "success", data: { booking } });
  } catch (err) {
    res.status(501).json({ status: "fail", message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    // земаме user од protect middleware
    const booking = await Booking.create({
      user: req.user._id,
      tour: req.body.tour,
      persons: req.body.persons,
      status: req.body.status,
    });

    res.status(201).json({ status: "success", data: { booking } });
  } catch (err) {
    res.status(501).json({ status: "fail", message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: "success", data: { booking } });
  } catch (err) {
    res.status(501).json({ status: "fail", message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
};