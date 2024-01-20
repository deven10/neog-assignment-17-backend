const express = require('express');
const exerciseRouter = express.Router();

exerciseRouter.use(express.json());

const {
  addNewExercise,
  findAllExercises,
  deleteExercise
} = require("../Controllers/exercise.controller")

// Creating a new Exercise
exerciseRouter.post("/", async (req, res) => {
  try {
    const body = req.body
    const exercise = await addNewExercise(body)
    res.status(201).json({ message: "Exercise Added Successfully", exercise })
  } catch (e) {
    res.status(500).json({ message: "Failed to add New Exercise", error: e })
  }
})

// reading all exercises
exerciseRouter.get("/", async (req, res) => {
  try {
    const exercises = await findAllExercises()
    if(exercises.length > 0) {
      res.status(200).json({message: "Exercises Found", exercises})
    } else {
      res.status(204).json({message: "No Exercises Found"})
    }
  } catch (e) {
    res.status(500).json({message:"Something went wrong!", error: e})
  }
})

// deleting an existing exercise
exerciseRouter.delete("/:exerciseId", async (req, res) => {
  try {
    const exerciseId = req.params.exerciseId
    const exercise = await deleteExercise(exerciseId)
    if(exercise.name) {
      res.status(200).json({message: "Exercise Deleted", exercise})
    } else {
      res.status(204).json({message: "No Exercises Found with this ID"})
    }
  } catch (e) {
    res.status(500).json({message:"Something went wrong!", error: e})
  }
})

module.exports = exerciseRouter