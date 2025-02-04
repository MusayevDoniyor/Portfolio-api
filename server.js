const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const projectRoutes = require("./routes/projectRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err.message));

app.use("/api/projects", projectRoutes);

app.get("/", (_, res) => {
  res.send("Welcome to the my Portfolio's api");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
