const Academy = require("../models/academyModel");

// GET ALL
exports.getAllAcademies = async (req, res) => {
  try {
    const academies = await Academy.find();

    res.status(200).json({
      status: "success",
      results: academies.length,
      data: {
        academies,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

// GET ONE
exports.getAcademyById = async (req, res) => {
  try {
    const academy = await Academy.findById(req.params.id);

    if (!academy) {
      return res.status(404).json({
        status: "fail",
        message: "Nema akademija so toj ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        academy,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

// CREATE
exports.createAcademy = async (req, res) => {
  try {
    const newAcademy = await Academy.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        academy: newAcademy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// UPDATE
exports.updateAcademy = async (req, res) => {
  try {
    const academy = await Academy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!academy) {
      return res.status(404).json({
        status: "fail",
        message: "Ne e pronajdena akademija za update",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        academy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// DELETE
exports.deleteAcademy = async (req, res) => {
  try {
    const academy = await Academy.findByIdAndDelete(req.params.id);

    if (!academy) {
      return res.status(404).json({
        status: "fail",
        message: "Ne e pronajdena akademija za brishenje",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};