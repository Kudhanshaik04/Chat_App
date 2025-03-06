import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";
const router = express.Router();

router.post("/signup", signup);  // Handle signup
router.post("/login", login);     // Handle login
router.get("/logout",logout);  // Ensure token validation before logout

export default router;
