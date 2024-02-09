// ***************************************************************************************************************
// 8. Problem: Express Error Handling

// Problem Statement: Create an Express route that throws an error if the request parameter "number" is not a positive integer. Implement an error handling middleware to catch and handle this specific error, returning a custom error message and a 400 Bad Request status.

// Function Signature:

// /**
//  * Express route to handle requests with a positive integer parameter
//  * @param {Object} req - Express request object
//  * @param {Object} res - Express response object
//  */
// function positiveIntegerHandler(req, res) {
//   // Your implementation here
// }
// Expected Output:

// If "number" is a positive integer: Return a success message.
// If "number" is not a positive integer: Trigger an error handled by the error handling middleware.
// Test Cases:

// Request to /positive?number=5 should return a success message.
// Request to /positive?number=-2 should trigger the error handling middleware.
// ***************************************************************************************************************

function positiveIntegerHandler(req, res, next) {
  const number = parseInt(req.query.number);

  if (Number.isInteger(number) && number > 0) {
    return res
      .status(200)
      .json({ message: "Success: Number is positive integer." });
  } else {
    const error = new Error("Number must be a positive integer.");
    error.status = 400;
    next(error);
  }
}

function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json({ error: err.message });
}

const express = require("express");
const app = express();

app.get("/positive", positiveIntegerHandler);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//   http://localhost:3000/positive?number=5 =={"message":"Success: Number is positive integer."}
// http://localhost:3000/positive?number=0 == {"error":"Number must be a positive integer."}
// http://localhost:3000/positive?number=-9 == {"error":"Number must be a positive integer."}
// node positiveIntegerHandler.js
