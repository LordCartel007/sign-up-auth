import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./db/connectDB.js";

// importing all the routes from the auth.route.js file
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true })); // to allow cross-origin requests

app.use(express.json()); // to parse json data from the request body
app.use(cookieParser()); // to parse cookies from the request

//using all the auth routes we import
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
