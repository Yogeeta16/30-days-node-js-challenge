// app.js
const express = require("express");
const jwt = require("jsonwebtoken");
const authenticationMiddleware = require("./authMiddleware");

const app = express();

const PORT = process.env.PORT || 3000;


const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

app.post("/login", (req, res) => {
  const user = users[0]; // Assume user1 is logging in
  const token = jwt.sign({ username: user.username }, "YOGEETA");
  res.json({ token });
});

// Protected route - requires authentication
app.get("/protected", authenticationMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
