const Scenario = require('../models/scenarioModel')

exports.getAllScenarios = async (req, res) => {
  try {

    const scenarios = await Scenario.find()

    res.status(200).json({
      status: "success",
      results: 3,
      data: {
        scenarios: [
          {
            id: 1,
            objection: "I already have insurance.",
          },
          {
            id: 2,
            objection: "It is too expensive.",
          },
          {
            id: 3,
            objection: "Call me later.",
          },
        ],
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getScenario = async (req,res) => {
  try{
    const scenario = await Scenario.findById(req.params.id);

    res.status(200).json({
      status:"success",
      data: {
        scenario,
      },
    });
  }
  catch(err){
    res.status(500).json({
      status:"fail",
      message:err.message,
    });
  }
}

exports.createScenario = async (req,res) => {

    try{
        const newScenario = await Scenario.create(req.body)

        res.status(201).json({
            status:"success",
            data:{
                scenario:newScenario,
            }
        })
    }
    catch(err){
        res.status(400).json({
            status:"fail",
            message:err.message
        })
    }
}

exports.updateScenario = async(req,res) => {
  try{
    const scenario = await Scenario.findByIdAndUpdate(req.params.id,req.body,{
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status:"success",
      data: {
        scenario,
      },
    });
  }catch(err){
    res.status(400).json({
      staus:"fail",
      message:err.message
    })
  }
}

exports.deleteScenario = async (req,res) => {

  try{
    const deleteScenario =  await Scenario.findByIdAndDelete(req.params.id)

    res.status(202).json({
      status:"success",
      data: null,
    })
  }
  catch(err){
    res.status(500).json({
      status:"fail",
      message:err.message
    })
  }
}