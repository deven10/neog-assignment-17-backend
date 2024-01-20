require("./db");

const exerciseRouter = require("./Routes/exercise.routes");
const goalRouter = require("./Routes/goal.routes");
const foodRouter = require("./Routes/food.routes");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/exercises", exerciseRouter);
app.use("/api/goals", goalRouter);
app.use("/api/foods", foodRouter);

app.get("/", (req, res) => {
  res.send("<h1> Assignment 17 neoG </h1>");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use((req, res) => {
  res.status(404).json({ error: "No route found lol!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
