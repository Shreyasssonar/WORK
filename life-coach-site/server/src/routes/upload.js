// server/src/routes/upload.js
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });

// Upload route
router.post("/", upload.array("files", 10), (req, res) => {
    try {
        const fileUrls = req.files.map(f => `/uploads/${f.filename}`);
        res.json({ success: true, files: fileUrls });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Upload failed" });
    }
});

export default router;
