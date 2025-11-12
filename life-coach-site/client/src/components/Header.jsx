import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";
<PageWrapper>
    {/* page content */}
</PageWrapper>


export default function Header() {
    return (
        <nav style={styles.nav}>
            <Link style={styles.link} to="/">Home</Link>
            <Link style={styles.link} to="/about">About</Link>
            <Link style={styles.link} to="/services">Services</Link>
            <Link style={styles.link} to="/contact">Contact</Link>
            <Link style={styles.link} to="/gallery">Gallery</Link>
            <Link style={styles.link} to="/admin">Admin</Link>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#4CAF50",
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontWeight: "bold",
    },
};
