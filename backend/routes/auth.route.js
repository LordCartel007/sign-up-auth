import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// Define your routes here
router.get("/signup", signup);

router.get("/signup", login);

router.get("/signup", logout);

// exporting all the routers here
export default router;
