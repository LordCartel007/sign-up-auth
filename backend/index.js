import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";

// importing all the routes from the auth.route.js file
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World 123");
});

//using all the auth routes we import
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
