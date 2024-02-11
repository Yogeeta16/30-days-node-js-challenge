// authMiddleware.js
const jwt = require("jsonwebtoken");

function authenticationMiddleware(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, "YOGEETA", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    } else {
      req.user = decoded;
      next();
    }
  });
}

module.exports = authenticationMiddleware;
