import React from "react";
import AdminUploader from "../components/AdminUploader";
import Gallery from "../components/Gallery";

export default function AdminPage() {
    return (
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Admin Panel</h1>

            {/* Uploader Section */}
            <section style={{ marginBottom: "40px" }}>
                <h2 style={{ textAlign: "center" }}>Upload Media</h2>
                <AdminUploader />
            </section>

            {/* Gallery Section */}
            <section>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Uploaded Media</h2>
                <Gallery isAdmin={true} />
            </section>
        </div>
    );
}
