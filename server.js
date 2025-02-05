const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const projectRoutes = require("./routes/projectRoutes");

dotenv.config();

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://my-portfolio-next-js-eta.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(cors(corsOptions));

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err.message));

app.use("/api/projects", projectRoutes);

app.get("/", (_, res) => {
  res.send("Welcome to my Portfolio's API");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
