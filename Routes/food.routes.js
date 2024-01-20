const express = require('express');
const foodRouter = express.Router();

foodRouter.use(express.json());

const {
  addNewFood,
  findAllFoods,
  deleteFood
} = require("../Controllers/food.controller")

// Creating a new Exercise
foodRouter.post("/", async (req, res) => {
  try {
    const body = req.body
    const food = await addNewFood(body)
    res.status(201).json({ message: "Food Added Successfully", food })
  } catch (e) {
    res.status(500).json({ message: "Failed to add New Food", error: e })
  }
})

// reading all foods
foodRouter.get("/", async (req, res) => {
  try {
    const foods = await findAllFoods()
    if(foods.length > 0) {
      res.status(200).json({message: "Foods Found", foods})
    } else {
      res.status(204).json({message: "No Foods Found"})
    }
  } catch (e) {
    res.status(500).json({message:"Something went wrong!", error: e})
  }
})

// deleting an existing food
foodRouter.delete("/:foodId", async (req, res) => {
  try {
    const foodId = req.params.foodId
    const food = await deleteFood(foodId)
    if(food.name) {
      res.status(200).json({message: "Food Deleted", food})
    } else {
      res.status(204).json({message: "No Food Found with this ID"})
    }
  } catch (e) {
    res.status(500).json({message:"Something went wrong!", error: e})
  }
})

module.exports = foodRouter