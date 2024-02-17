const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const mongoURI = "mongodb://127.0.0.1/mydatabase";

function connectToMongoDB() {
  mongoose.connect(mongoURI);

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", function () {
    console.log("MongoDB connected successfully!");
  });
}

connectToMongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
