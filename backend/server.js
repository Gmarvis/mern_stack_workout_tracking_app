require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();
// require routers

// midlewares

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connet db
mongoose
  .connect(process.env.MONG0_URL)
  .then(() => {
    console.log("database connected succesfuly");
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(`listening on, ${process.env.PORT}!!!`);
    });
  })
  .catch((error) => console.log("there ws an error: ", error));
