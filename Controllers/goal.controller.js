const Goal = require("../Models/Goal")

// ----------------------------
// add new exercise function
async function addNewGoal(goalDetails) {
  try {
    console.log("adding new goal...")
    const newGoal = new Goal(goalDetails)
    const goal = await newGoal.save();
    return goal;
  } catch (e) {
    throw e;
  }
}

// --------------------------------------
// find all foods
async function findAllGoals() {
  try {
    const goals = await Goal.find()
    return goals
  } catch (e) {
    throw e
  }
}

// --------------------------------------
// delete an existing food
async function deleteGoal(goalId) {
  try {
    const goal = await Goal.findByIdAndDelete(goalId)
    return goal
  } catch (e) {
    throw e
  }
}


module.exports = {
  addNewGoal,
  findAllGoals,
  deleteGoal
}
