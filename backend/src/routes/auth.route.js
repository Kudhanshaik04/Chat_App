import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";

const router = express.Router();

// Use POST for login as well
router.post("/signup", signup);
router.post("/login", login); // Changed from GET to POST for login
router.get("/logout", logout);

export default router;
