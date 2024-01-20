const Food = require("../Models/food")

// ----------------------------
// add new exercise function
async function addNewFood(FoodDetails) {
  try {
    console.log("adding new food...")
    const newFood = new Food(FoodDetails)
    const food = await newFood.save();
    return food;
  } catch (e) {
    throw e;
  }
}

// --------------------------------------
// find all foods
async function findAllFoods() {
  try {
    const foods = await Food.find()
    console.log("all foods: ", foods)
    return foods
  } catch (e) {
    throw e
  }
}

// --------------------------------------
// delete an existing food
async function deleteFood(foodId) {
  try {
    const food = await Food.findByIdAndDelete(foodId)
    console.log("food deleted: ", food)
    return food
  } catch (e) {
    throw e
  }
}


module.exports = {
  addNewFood,
  findAllFoods,
  deleteFood
}
