const express = require('express');
const goalRouter = express.Router();

goalRouter.use(express.json());

const {
  addNewGoal,
  findAllGoals,
  deleteGoal
} = require("../Controllers/goal.controller")

// Creating a new Exercise
goalRouter.post("/", async (req, res) => {
  try {
    const body = req.body
    const goal = await addNewGoal(body)
    res.status(201).json({ message: "Goal Added Successfully", goal })
  } catch (e) {
    res.status(500).json({ message: "Failed to add New Goal", error: e })
  }
})

// reading all goals
goalRouter.get("/", async (req, res) => {
  try {
    const goals = await findAllGoals()
    if(goals.length > 0) {
      res.status(200).json({message: "Goals Found", goals})
    } else {
      res.status(204).json({message: "No Goals Found"})
    }
  } catch (e) {
    res.status(500).json({message:"Something went wrong!", error: e})
  }
})

// deleting an existing goal
goalRouter.delete("/:goalId", async (req, res) => {
  try {
    const goalId = req.params.goalId
    const goal = await deleteGoal(goalId)
    if(goal.name) {
      res.status(200).json({message: "Goal Deleted", goal})
    } else {
      res.status(204).json({message: "No Goal Found with this ID"})
    }
  } catch (e) {
    res.status(500).json({message:"Something went wrong!", error: e})
  }
})

module.exports = goalRouter