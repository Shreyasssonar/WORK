// server/index.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Import routes
import contactRoutes from "./src/routes/contact.js";
import uploadRoutes from "./src/routes/upload.js";
import mediaRoutes from "./src/routes/media.js";

// Initialize dotenv and Express
dotenv.config();
const app = express();
app.set("trust proxy", true);
app.use(cors());
app.use(express.json());

// Path setup for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Serve uploaded files correctly
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// ✅ Favicon handler (stops "Cannot GET /favicon.ico" error)
app.get("/favicon.ico", (req, res) => {
    res.status(204).end(); // No Content
});

// API routes
app.use("/api/contact", contactRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/media", mediaRoutes);

// Health check route (optional but useful)
app.get("/", (req, res) => {
    res.send("✅ API server is running successfully!");
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

  