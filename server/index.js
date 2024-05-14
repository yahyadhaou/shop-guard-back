const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./database");
const productRoutes = require("./routes/product.routes"); 
const usersRoutes= require("./routes/users.routes")

const app = express();
const PORT = 8000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome To shop Backend server");
});

app.use("/api/products", productRoutes);
app.use("/api/users",usersRoutes)
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


module.exports = app;
