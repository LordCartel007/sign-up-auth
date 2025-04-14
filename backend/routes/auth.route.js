import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// Define your routes here
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

// exporting all the routers here
export default router;
