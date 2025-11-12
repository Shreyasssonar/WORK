import React from "react";
import PageWrapper from "./PageWrapper";
<PageWrapper>
    {/* page content */}
</PageWrapper>


export default function ServiceCard({ title, description }) {
    return (
        <div
            className="service-card"
            style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                textAlign: "center",
                transition: "transform 0.3s",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

