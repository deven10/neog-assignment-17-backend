const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    caloriesBurned: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
