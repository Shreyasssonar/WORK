import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // <- react icons added
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img
          src="/mahendra-devlekar-logo.png"
          alt="Logo"
          style={{ height: "50px", objectFit: "contain" }}
        />
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      <nav className={`nav ${open ? "nav-open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
        <Link to="/admin" onClick={() => setOpen(false)}>Admin</Link>
      </nav>
    </header>
  );
}
