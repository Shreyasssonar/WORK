import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const uploadDir = path.join(process.cwd(), "public/uploads");

// Delete a file
// Expecting body: { filename: "abc.jpg" }
router.delete("/", (req, res) => {
    const { filename } = req.body;

    if (!filename) {
        return res.status(400).json({ success: false, error: "Filename required" });
    }

    const filePath = path.join(uploadDir, filename);

    // Prevent deleting outside uploads folder
    if (!filePath.startsWith(uploadDir)) {
        return res.status(400).json({ success: false, error: "Invalid file path" });
    }

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, error: "Failed to delete file" });
        }
        res.json({ success: true, message: "File deleted successfully" });
    });
});

export default router;
