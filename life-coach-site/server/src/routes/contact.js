//server/src/routes/contact.js
import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: "All fields required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Contact from ${name}`,
            text: message,
        });

        res.json({ success: true, message: "Message sent!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to send message" });
    }
});

export default router;


