import express from "express";
//import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS Configuration to allow credentials (cookies)



// Middleware to parse incoming JSON data
app.use(express.json());

// Use the authentication routes
app.use("/api/auth", authRoutes);  // Prefix for auth routes

// Start the server and connect to the database
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
    connectDB();  // Ensure DB connection is set up
});
