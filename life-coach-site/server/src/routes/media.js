// server/src/routes/media.js

import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Fix __dirname handling in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Compute absolute path to uploads directory (used in index.js)
const uploadsDir = path.resolve(__dirname, "../../public/uploads");

// Ensure the uploads folder exists
if (!fs.existsSync(uploadsDir)) {
    console.warn(`⚠️  Uploads directory not found at ${uploadsDir}. Creating it now...`);
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// 📸 GET: Fetch all uploaded media
router.get("/", (req, res) => {
    try {
        const files = fs.readdirSync(uploadsDir);

        // Filter only common image/video types (optional)
        const validFiles = files.filter((f) =>
            /\.(jpg|jpeg|png|gif|mp4|mov|avi|webm)$/i.test(f)
        );

        const media = validFiles.map((name) => ({
            name,
            url: `/uploads/${name}`, // This matches static serve path in index.js
        }));

        console.log(`✅ Found ${media.length} media files`);
        res.json(media);
    } catch (err) {
        console.error("❌ Error reading uploads directory:", err);
        res.status(500).json({ error: "Unable to read media directory" });
    }
});

// 🗑️ DELETE: Remove media by filename
router.delete("/:filename", (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(uploadsDir, filename);

    // Extra safety: prevent directory traversal
    if (!filePath.startsWith(uploadsDir)) {
        return res.status(400).json({ success: false, error: "Invalid file path" });
    }

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`❌ Error deleting file ${filename}:`, err);
            return res.status(500).json({ success: false, error: "Could not delete file" });
        }

        console.log(`🗑️ Deleted file: ${filename}`);
        res.json({ success: true, message: `${filename} deleted successfully.` });
    });
});

export default router;

