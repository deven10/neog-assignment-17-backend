const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    targetDate: {
      type: Date,
      required: true,
    },
    targetCalories: {
      type: Number,
      required: true,
    },
    status: [
      {
        type: String,
        enum: ["In Progress", "Achieved", "Abandoned"],
      },
    ],
  },
  { timestamps: true }
);

const Goal = mongoose.model("Goal", GoalSchema);

module.exports = Goal;
