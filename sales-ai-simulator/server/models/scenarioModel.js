const mongoose = require('mongoose');

const scenarioSchema = new mongoose.Schema(
    {
        objection:{
            type:String,
            required: [true, "Scenario must have an Objection"],
            trim: true,
        },
        category: {
            type: String,
            required: [true,"Scenario must have a category" ],
            trim: true,
        },
        difficulty: {
            type:String,
            enum: ["easy","medium","hard"],
            default: "easy",
        },

    },
    {
        timestamps: true,
    }
);

const Scenario =  mongoose.model(
"Scenario",scenarioSchema
);

module.exports = Scenario;