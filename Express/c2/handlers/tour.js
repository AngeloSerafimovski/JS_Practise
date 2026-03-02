const Tour = require("../pkg/tours/tourSchema");

exports.getAll = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({ status: "success", data: { tours } });
  } catch (err) {
    res.status(501).json({ status: "fail", message: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({ status: "success", data: { tour } });
  } catch (err) {
    res.status(501).json({ status: "fail", message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(201).json({ status: "success", data: { tour } });
  } catch (err) {
    res.status(501).json({ status: "fail", message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: "success", data: { tour } });
  } catch (err) {
    res.status(501).json({ status: "fail", message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
};