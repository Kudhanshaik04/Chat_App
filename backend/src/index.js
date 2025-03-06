import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js"

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000; // Use 3000 as a fallback if PORT is not set

app.use("/api/auth", authRoutes);

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server is running on port:" + PORT);
    connectDB();
});
