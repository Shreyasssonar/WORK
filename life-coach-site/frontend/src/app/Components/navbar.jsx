'use client';
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <img
                    src="/logo.png"
                    alt="Logo"
                    style={{ height: "80px", objectFit: "contain" }}
                />
            </div>

            <button className="hamburger" onClick={() => setOpen(!open)}>
                {open ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>

            <nav className={`nav ${open ? "nav-open" : ""}`}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}
