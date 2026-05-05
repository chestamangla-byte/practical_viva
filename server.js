const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

// Middleware
app.use(express.json());
app.use(logger);

// Root Route
app.get("/", (req, res) => {
  res.json({
    message: "Server Running",
    time: new Date()
  });
});

// Routes
app.use("/users", userRoutes);

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      message: "All fields required",
      time: new Date()
    });
  }

  if (email === "admin@gmail.com" && password === "1234") {
    return res.json({
      message: "Login Success",
      time: new Date()
    });
  } else {
    return res.json({
      message: "Invalid Credentials",
      time: new Date()
    });
  }
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});