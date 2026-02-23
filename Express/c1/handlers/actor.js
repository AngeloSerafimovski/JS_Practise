const Actor = require("../pkg/actors/actorSchema");

// GET ALL
exports.getAll = async (req, res) => {
  try {
    const actors = await Actor.find();

    res.status(200).json({
      status: "success",
      data: {
        actors,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "fail",
      message: err.message,
    });
  }
};

// GET ONE
exports.getOne = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        actor,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "fail",
      message: err.message,
    });
  }
};

// CREATE
exports.create = async (req, res) => {
  try {
    const actor = await Actor.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        actor,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "fail",
      message: err.message,
    });
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    const actor = await Actor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        actor,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "fail",
      message: err.message,
    });
  }
};

// DELETE
exports.delete = async (req, res) => {
  try {
    await Actor.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};