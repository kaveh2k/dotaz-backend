const app = require("./src/config/app");

const PORT = process.env.PORT || 5000;

const { db } = require("./src/config/database");

// Database connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Server connection
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
