const express = require("express");

const app = express();
const PORT = 4000;

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("challo challe 🚀");
});

// sample API
app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from backend",
    success: true
  });
});

// POST example
app.post("/api/user", (req, res) => {
  const { name } = req.body;

  res.json({
    message: `User ${name} created`,
  });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});