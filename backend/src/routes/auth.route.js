import express from "express";
import { registerUser, loginUser, adminLogin } from "../controllers/authController.js";

const router = express.Router();

// Route for user registration
router.post("/register", registerUser);

// Route for user login
router.post("/login", loginUser);

// Route for admin login
router.post("/admin", adminLogin);

export default router;
