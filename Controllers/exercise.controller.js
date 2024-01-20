const Exercise = require("../Models/exercise")

// ----------------------------
// add new exercise function
async function addNewExercise(exerciseDetails) {
  try {
    console.log("adding new exercise...")
    const newExercise = new Exercise(exerciseDetails)
    const exercise = await newExercise.save();
    return exercise;
  } catch (e) {
    throw e;
  }
}

// --------------------------------------
// find all users
async function findAllExercises() {
  try {
    const exercises = await Exercise.find()
    return exercises
  } catch (e) {
    throw e
  }
}

// --------------------------------------
// delete an existing exercise
async function deleteExercise(exerciseId) {
  try {
    const exercise = await Exercise.findByIdAndDelete(exerciseId)
    return exercise
  } catch (e) {
    throw e
  }
}


module.exports = {
  addNewExercise,
  findAllExercises,
  deleteExercise
}