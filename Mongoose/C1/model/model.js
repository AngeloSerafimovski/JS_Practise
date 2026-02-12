const mongoose = require("mongoose");

const zemjodelieSchema = new mongoose.Schema({
  kultura:{
    type: String,
    required: true,
    trim: true
  },
  lokacija:{
    type: String,
    required: true,
    trim: true
  },
  povrsina:{
    type: Number,
    required: true,
    trim: true,
    min: 0
  }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Zemjodelie",zemjodelieSchema);