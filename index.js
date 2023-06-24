const app = require("./src/config/app");

const PORT = process.env.PORT || 5000;

// Server connection
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} and witing for database ....`);
});
