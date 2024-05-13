const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const database = require("./database");


const app = express();
const PORT = 8000;

app.use(cors({ origin: "*" }));



app.get("/", (req, res) => {
  res.send("Welcome To shop Backend server");
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.error(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

// Handle unhandled exceptions
process.on("uncaughtException", (err) => {
  console.error(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = app;