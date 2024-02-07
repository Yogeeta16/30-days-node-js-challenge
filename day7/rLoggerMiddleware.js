// *************************************************************************************************************
// 7. Problem: Express Middleware

// Problem Statement: Implement an Express middleware function that logs the timestamp and the HTTP method of every incoming request to the server.

// Function Signature:

// /**
//  * Express middleware to log incoming requests
//  * @param {Object} req - Express request object
//  * @param {Object} res - Express response object
//  * @param {Function} next - Express next function
//  */
// function requestLoggerMiddleware(req, res, next) {
//   // Your implementation here
// }
// Expected Output: Log entries in the server console should be in the format: {timestamp} - {HTTP method} request received.

// Test Cases:

// Any incoming request should trigger the middleware and log the appropriate message.
// *************************************************************************************************************
function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  console.log(`${timestamp} - ${method} request received`);
  next();
}

module.exports = requestLoggerMiddleware;


