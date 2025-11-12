import React, { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [msg, setMsg] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        setMsg(data.message || data.error);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Contact Us</h3>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <textarea name="message" placeholder="Message" onChange={handleChange} />
            <button type="submit">Send</button>
            <p>{msg}</p>
        </form>
    );
}
